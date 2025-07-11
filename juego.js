const preguntas = [
    { pregunta: "¿Cuál es la unidad de fuerza en el Sistema Internacional?", respuesta: "newton" },
    { pregunta: "¿Qué ley explica la inercia?", respuesta: "primera" },
    { pregunta: "¿Cómo se llama el movimiento con velocidad constante?", respuesta: "MRU" },
  ];
  
  let preguntaActual = preguntas[Math.floor(Math.random() * preguntas.length)];
  document.getElementById('pregunta-juego').innerText = preguntaActual.pregunta;
  
  function verificarRespuesta() {
    const respuestaUsuario = document.getElementById('respuesta').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');
  
    if (respuestaUsuario === preguntaActual.respuesta.toLowerCase()) {
      feedback.innerText = "✅ ¡Correcto!";
      feedback.style.color = "lightgreen";
    } else {
      feedback.innerText = `❌ Incorrecto. La respuesta era: ${preguntaActual.respuesta}`;
      feedback.style.color = "tomato";
    }
  }
  