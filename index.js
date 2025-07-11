document.getElementById('pregunta-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const grado = document.querySelector('[name="grado"]').value;
    const tema = document.querySelector('[name="tema"]').value;
  
    const pregunta = `¿Qué sabes sobre el tema "${tema}" en el nivel ${grado}?`;
    document.getElementById('resultado').innerText = pregunta;
  });
  