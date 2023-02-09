function iniciar(){
  movimientos = 0;
  let tarjetas = niveles[nivelActual].tarjetas;
  reparteTarjetas(tarjetas);
  document.getElementById('mov').innerText = "00";
  maxContador();
  document.querySelector('.selecciona-nivel').classList.remove("visible");
  document.getElementById('endGame').classList.remove("visible");
  document.getElementById('timeOver').classList.remove("visible");
  document.getElementById('gameOver').classList.remove("visible");
  document.getElementById('subeNivel').classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(elemento => {
    elemento.addEventListener("click", descubrir);
  });

  if(!modoRelax){
    iniciaCronometro();
  } else {
    document.getElementById('cronometro').classList.add("cronometro-oculto");
  }
}

function reiniciar(){
  nivelActual = 0;
  actualizaNivel();
  iniciar();
}

function iniciaJuegoNormal(){
  modoRelax = false;
  document.getElementById('bienvenida').classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciaJuegoRelax(){
  modoRelax = true;
  document.getElementById('bienvenida').classList.remove("visible");
  iniciar();
}