// Vercel Serverless Function — AI Image Analyzer v2.1
// Path: /api/analyze.js

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { imageData, mimeType, imageCount = 1, imageLabels = '', hasMultiple = false } = req.body;
    if (!imageData) return res.status(400).json({ error: 'imageData is required' });

    const multiCtx = hasMultiple
      ? 'Gambar yang dikirim adalah: ' + imageLabels + '. Gunakan semua konteks untuk analisis lebih akurat.'
      : '';

    const prompt = [
      'Kamu adalah ahli furniture Jepara yang sangat berpengalaman dalam membaca gambar teknik, shop drawing, dan foto produk furniture.',
      multiCtx,
      'Analisis gambar furniture ini dengan sangat teliti. BACA semua dimensi/angka yang tertulis di gambar jika ada.',
      'Jawab HANYA dengan JSON valid, tidak ada teks lain.',
      '',
      'FORMAT JSON yang HARUS dikembalikan:',
      '{',
      '  "furniture_type": "bed|lemari|kursi|sofa|meja",',
      '  "furniture_name_id": "nama lengkap dalam bahasa Indonesia",',
      '  "furniture_name_en": "full name in English",',
      '  "size_standard": "deskripsi ukuran standar",',
      '  "dimensions": {',
      '    "panjang": number_cm,',
      '    "lebar": number_cm,',
      '    "tinggi": number_cm,',
      '    "diameter": number_or_null,',
      '    "shape": "rectangular|round|oval|other"',
      '  },',
      '  "wood_recommendation": "nama kayu",',
      '  "wood_reason": "alasan max 20 kata",',
      '  "confidence": 0_to_100,',
      '  "image_type": "foto_produk|sketsa_tangan|blueprint|gambar_teknik|katalog",',
      '  "style": "minimalis|klasik|modern|jepara|rustic|skandinavia",',
      '  "notes": "catatan penting untuk kalkulasi volume, max 40 kata",',
      '  "components": [',
      '    {',
      '      "code": "kode komponen misal TW-01 LK-01 ST-01",',
      '      "name": "nama komponen dalam bahasa Indonesia",',
      '      "type": "SW|PW|NW|MARBLE|METAL",',
      '      "qty": number,',
      '      "p": panjang_cm_number,',
      '      "l": lebar_cm_number,',
      '      "t": tebal_cm_number,',
      '      "shape": "rectangular|round|panel|curved|other",',
      '      "notes": "catatan khusus komponen ini"',
      '    }',
      '  ]',
      '}',
      '',
      'PENTING:',
      '- Baca SEMUA angka dimensi yang tertulis di gambar teknik',
      '- Untuk komponen BUNDAR: p = diameter, l = diameter, t = tebal',
      '- Untuk MARBLE/KACA: type = NW, catat di notes bahwa ini non-kayu',
      '- Jika ada simbol Ø berarti diameter lingkaran',
      '- Estimasi dimensi yang realistis jika tidak tertulis di gambar',
      '- Semua dimensi dalam CM'
    ].filter(Boolean).join(' ');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: mimeType || 'image/jpeg', data: imageData }
            },
            { type: 'text', text: prompt }
          ]
        }]
      })
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error?.message || 'Anthropic API error ' + response.status);
    }

    const data = await response.json();
    const rawText = data.content[0].text;

    // Parse JSON
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('AI response tidak valid');
    const result = JSON.parse(jsonMatch[0]);

    return res.status(200).json({ success: true, result, usage: data.usage });

  } catch (error) {
    console.error('Analyze API Error:', error);
    return res.status(500).json({ success: false, error: error.message || 'Internal server error' });
  }
}
