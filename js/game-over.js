function gameOver(){
    clearInterval(cronometro);
    document.getElementById('gameOver').classList.add("visible");
}

function timeOver(){
    document.getElementById('timeOver').classList.add("visible");
}