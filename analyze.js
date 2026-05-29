export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { imageData, mimeType, imageCount=1, imageLabels='', hasMultiple=false } = req.body;
    if (!imageData) return res.status(400).json({ error: 'imageData required' });

    const multiCtx = hasMultiple ? 'Gambar yang tersedia: '+imageLabels+'.' : '';

    const prompt = `Kamu adalah ahli furniture Jepara dengan keahlian membaca gambar teknik, blueprint, dan shop drawing secara presisi.

${multiCtx}

TUGAS UTAMA: Baca SEMUA dimensi yang tertulis di gambar dengan teliti. Jika ada angka di gambar, WAJIB gunakan angka tersebut.

Contoh cara baca dimensi dari gambar:
- "68 inch" atau "1727mm" = 172.7 cm
- "20 inch" atau "508mm" = 50.8 cm  
- "36 inch" atau "914mm" = 91.4 cm
- "Ø120" = diameter 120 cm (bundar)
- "4x" = qty 4 buah
- "17 MODULE" = lebar per modul 43.2 cm

Jawab HANYA dengan JSON valid, tidak ada teks lain, tidak ada markdown.

{
  "furniture_type": "bed|lemari|kursi|sofa|meja",
  "furniture_name_id": "nama produk Indonesia",
  "furniture_name_en": "product name English",
  "size_standard": "ukuran standar atau Custom",
  "dimensions": {
    "panjang": angka_cm,
    "lebar": angka_cm,
    "tinggi": angka_cm,
    "diameter": angka_atau_null,
    "shape": "rectangular|round|oval"
  },
  "wood_recommendation": "nama kayu paling cocok",
  "wood_reason": "alasan max 15 kata",
  "confidence": 0_sampai_100,
  "image_type": "foto_produk|sketsa_tangan|blueprint|gambar_teknik|katalog",
  "style": "minimalis|klasik|modern|jepara|industrial",
  "notes": "catatan penting kalkulasi volume max 30 kata",
  "components": [
    {
      "code": "kode unik misal CRD-TP atau C01",
      "name": "nama komponen Indonesia",
      "type": "SW|PW|NW|MARBLE|METAL",
      "qty": angka,
      "p": panjang_cm_ANGKA_NYATA,
      "l": lebar_cm_ANGKA_NYATA,
      "t": tebal_cm_ANGKA_NYATA,
      "shape": "rectangular|round|panel_tall|panel_wide|plank",
      "notes": "catatan singkat"
    }
  ]
}

SANGAT PENTING untuk dimensi komponen:
- Baca angka dimensi yang TERTULIS di gambar, jangan asal-asalan
- Panel besar (top/bottom/side): p dan l biasanya puluhan cm
- Kaki/leg: tinggi biasanya 15-80cm, tebal 4-10cm
- Rail/stretcher: panjang biasanya sama dengan lebar furniture
- shape "panel_tall" = panel tinggi seperti pintu/side panel
- shape "panel_wide" = panel lebar seperti top/bottom/shelf
- shape "plank" = balok panjang seperti rail/kaki
- shape "round" = bundar, isi p=diameter, l=diameter
- JANGAN isi dimensi 7x7x7 - itu tidak realistis!
- Estimasi realistis jika tidak ada angka: top panel credenza 68"wide = p:172, l:50, t:3`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
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
            { type: 'image', source: { type: 'base64', media_type: mimeType||'image/jpeg', data: imageData } },
            { type: 'text', text: prompt }
          ]
        }]
      })
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || 'API error '+response.status);
    }

    const data = await response.json();
    const raw = data.content[0].text;
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Response tidak valid');
    const result = JSON.parse(match[0]);

    // Post-process: fix any 7x7x7 dimensions
    if (result.components) {
      result.components = result.components.map(function(c) {
        // If dimensions are suspiciously all equal and small, flag them
        if (c.p === c.l && c.l === c.t && c.p < 10) {
          c.dimensionWarning = true;
        }
        return c;
      });
    }

    return res.status(200).json({ success: true, result, usage: data.usage });

  } catch(e) {
    console.error('Error:', e);
    return res.status(500).json({ success: false, error: e.message });
  }
}
