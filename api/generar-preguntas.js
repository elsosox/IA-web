export default async function handler(req, res) {
    const { prompt } = req.body;
  
    const apiKey = process.env.OPENAI_API_KEY;
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500,
        temperature: 0.7
      }),
    });
  
    const json = await response.json();
    const texto = json.choices[0].message.content;
  
    const preguntas = texto.split(/\n/).filter(l => l.trim()).map(p => p.replace(/^\d+\.\s*/, ''));
  
    res.status(200).json({ resultado: preguntas });
  }
  