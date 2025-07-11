document.getElementById('pregunta-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const grado = document.querySelector('[name="grado"]').value;
  const tema = document.querySelector('[name="tema"]').value;
  const resultado = document.getElementById('resultado');

  resultado.innerText = "⏳ Generando preguntas...";

  const prompt = `Genera 5 preguntas de física para el nivel ${grado} sobre el tema "${tema}".`;

  try {
    const response = await fetch('/api/generar-preguntas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    resultado.innerHTML = `<ul>${data.resultado.map(p => `<li>${p}</li>`).join('')}</ul>`;
  } catch (error) {
    resultado.innerText = "❌ Error al generar preguntas.";
    console.error(error);
  }
});
