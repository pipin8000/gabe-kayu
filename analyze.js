// Vercel Serverless Function — AI Image Analyzer
// Path: /api/analyze.js
// Called from: app.html → fetch('/api/analyze')

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { imageData, mimeType } = req.body;

    if (!imageData) {
      return res.status(400).json({ error: 'imageData is required' });
    }

    // Build prompt with multi-image context
    const { imageCount = 1, imageLabels = 'Foto Produk', hasMultiple = false } = req.body;
    const multiCtx = hasMultiple
      ? 'Gambar yang dikirim adalah: ' + imageLabels + '. Gunakan semua konteks untuk analisis lebih akurat.'
      : '';

    const prompt = [
      'Kamu adalah ahli furniture Jepara berpengalaman.',
      multiCtx,
      'Analisis gambar furniture ini dan jawab HANYA dengan JSON valid.',
      'Field yang dibutuhkan:',
      '- furniture_type: bed/lemari/kursi/sofa/meja',
      '- furniture_name_id: nama dalam bahasa Indonesia',
      '- furniture_name_en: name in English',
      '- size_standard: ukuran standar (Single 90x200 / Queen 160x200 / Custom / dll)',
      '- dimensions: object dengan panjang, lebar, tinggi, tinggi_headboard, tinggi_footboard (dalam cm, number)',
      '- wood_recommendation: nama kayu yang paling cocok (Jati/Mindi/Mahoni/Sengon/dll)',
      '- wood_reason: alasan singkat rekomendasi kayu (max 20 kata)',
      '- confidence: angka 0-100 tingkat keyakinan deteksi',
      '- image_type: foto_produk/sketsa_tangan/blueprint/gambar_teknik/katalog',
      '- components: array of {code, name, qty} komponen utama furniture',
      '- notes: catatan penting untuk kalkulasi volume kayu (max 30 kata)',
      '- style: minimalis/klasik/modern/jepara/rustic/skandinavia',
      'Dimensi harus realistis untuk furniture Jepara standar ekspor.',
      'Jika gambar tidak jelas, berikan estimasi terbaik dengan confidence rendah.',
      'Jawab HANYA JSON, tidak ada teks lain.'
    ].join(' ');

    // Call Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: mimeType || 'image/jpeg',
                data: imageData
              }
            },
            {
              type: 'text',
              text: prompt
            }
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

    // Parse JSON from response
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('AI response tidak valid - bukan JSON');
    }

    const result = JSON.parse(jsonMatch[0]);

    return res.status(200).json({
      success: true,
      result: result,
      usage: data.usage
    });

  } catch (error) {
    console.error('Analyze API Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error'
    });
  }
}
