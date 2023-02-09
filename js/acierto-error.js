function acierto(lasTarjetas) {
  lasTarjetas.forEach(elemento => {
    elemento.classList.add("acertada");
  });
  document.getElementById('sonido-acierto').play();
}

function error(lasTarjetas) {
  lasTarjetas.forEach(elemento => {
    elemento.classList.add("error");
  });

  document.getElementById('sonido-error').play();

  setTimeout(function() {
    lasTarjetas.forEach(elemento => {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}