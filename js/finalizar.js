function finalizar(){
    clearInterval(cronometro);
    if(nivelActual < niveles.length - 1){
        document.getElementById('subeNivel').classList.add("visible");
    } else { 
        document.getElementById('endGame').classList.add("visible");
    }
}