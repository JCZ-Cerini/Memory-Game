// Escribimos los niveles dinamicamente
escribeNiveles();

//Asignamos eventos iniciales
document.querySelectorAll(".reiniciar").forEach(elemento => {
    elemento.addEventListener("click", reiniciar)
})

document.getElementById('juego-normal').addEventListener("click", iniciaJuegoNormal);
document.getElementById('juego-relax').addEventListener("click", iniciaJuegoRelax);
document.getElementById('control-nivel').addEventListener("click", muestraMenuNiveles);
document.getElementById('cierra-niveles').addEventListener("click", ocultaMenuNiveles);

document.querySelectorAll(".nivel").forEach(elemento => {
    elemento.addEventListener("click", cambiaNivel)
})

document.getElementById('subir').addEventListener("click", cargaNuevoNivel);

document.querySelector("body").addEventListener("click", clickFueraDeMenu);

document.addEventListener("keydown", teclaEscCierraMenu);

// Mostamos pantalla de bienvenida
document.getElementById('bienvenida').classList.add("visible");
