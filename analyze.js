export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { imageData, mimeType, imageCount=1, imageLabels='', hasMultiple=false } = req.body;
    if (!imageData) return res.status(400).json({ error: 'imageData required' });

    const multiCtx = hasMultiple ? 'Gambar: '+imageLabels+'.' : '';

    const prompt = `Kamu ahli furniture Jepara yang berpengalaman membaca blueprint dan shop drawing secara sangat presisi.

${multiCtx}

LANGKAH WAJIB:
1. Scan SEMUA angka dimensi yang tertulis di gambar
2. Konversi ke CM: 1 inch=2.54cm, 1mm=0.1cm
3. Gunakan angka NYATA dari gambar, BUKAN perkiraan asal

KONVERSI UMUM FURNITURE:
- 68" = 172.7cm, 20" = 50.8cm, 36" = 91.4cm
- 17" = 43.2cm, 25.25" = 64.1cm, 6.75" = 17.1cm
- Ø120 = diameter 120cm (bundar)

Jawab HANYA JSON valid, tanpa teks lain:

{
  "furniture_type": "bed|lemari|kursi|sofa|meja",
  "furniture_name_id": "nama produk lengkap",
  "furniture_name_en": "full product name",
  "size_standard": "ukuran standar atau Custom",
  "dimensions": {
    "panjang": angka_cm,
    "lebar": angka_cm,
    "tinggi": angka_cm,
    "diameter": null_atau_angka,
    "shape": "rectangular|round|oval"
  },
  "wood_recommendation": "nama kayu",
  "wood_reason": "alasan singkat",
  "confidence": 0_100,
  "image_type": "foto_produk|blueprint|gambar_teknik|sketsa_tangan|katalog",
  "style": "minimalis|klasik|modern|industrial|jepara",
  "notes": "catatan penting untuk kalkulasi volume",
  "components": [
    {
      "code": "kode misal CRD-TP",
      "name": "nama komponen bahasa Indonesia",
      "type": "SW|PW|NW|MARBLE|METAL",
      "qty": angka_integer,
      "p": panjang_cm_NYATA_dari_gambar,
      "l": lebar_cm_NYATA_dari_gambar,
      "t": tebal_cm_NYATA_dari_gambar,
      "shape": "rectangular|round|panel_tall|panel_wide|plank",
      "notes": "catatan"
    }
  ]
}

ATURAN DIMENSI KERAS - WAJIB DIIKUTI:
- DILARANG mengisi semua komponen dengan dimensi sama (misal semua 10x10x4)
- SETIAP komponen HARUS punya dimensi berbeda sesuai fungsinya
- Top/Bottom panel: p = lebar furniture, l = kedalaman furniture
- Side panel: p = tinggi furniture, l = kedalaman furniture
- Kaki/leg: p = tinggi kaki, l dan t = ukuran penampang kaki
- Rail/stretcher: p = lebar furniture, l dan t = penampang kecil
- Jika tidak ada angka di gambar, ESTIMASI REALISTIS berdasarkan proporsi
- JANGAN PERNAH isi 10x10x4 untuk semua komponen!`;

    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 2000,
        messages: [{
          role: 'user',
          content: [
            { type:'image', source:{ type:'base64', media_type: mimeType||'image/jpeg', data: imageData }},
            { type:'text',  text: prompt }
          ]
        }]
      })
    });

    if (!resp.ok) {
      const err = await resp.json();
      throw new Error(err.error?.message || 'API error '+resp.status);
    }

    const data = await resp.json();
    const raw  = data.content[0].text;
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Response tidak valid');
    const result = JSON.parse(match[0]);

    // Post-process: warn if all dimensions same
    if (result.components && result.components.length > 2) {
      const allSame = result.components.every(function(c) {
        return c.p === result.components[0].p &&
               c.l === result.components[0].l &&
               c.t === result.components[0].t;
      });
      if (allSame) result.dimensionWarning = 'AI tidak dapat baca dimensi spesifik. Edit manual di cutting list.';
    }

    return res.status(200).json({ success:true, result, usage: data.usage });

  } catch(e) {
    console.error('Analyze error:', e);
    return res.status(500).json({ success:false, error: e.message });
  }
}
