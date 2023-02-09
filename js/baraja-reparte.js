function barajaTarjetas(lasTarjetas) {
    let resultado;
    let totalTarjetas = lasTarjetas.concat(lasTarjetas);
    resultado = totalTarjetas.sort(() => {
        return 0.5 - Math.random();
    });
    return resultado;
}

function reparteTarjetas(resultado) {
    let mesa = document.getElementById('mesa');
    let tarjetasBarajadas = barajaTarjetas(resultado);
    mesa.innerHTML = '';

    tarjetasBarajadas.forEach(elemento => {
        let tarjeta = document.createElement("div");

        tarjeta.innerHTML = 
        `<div class='tarjeta' data-valor="${elemento}">
            <div class='tarjeta__contenido'> ${elemento}</div>
        </div>`

        mesa.appendChild(tarjeta);
    });
}