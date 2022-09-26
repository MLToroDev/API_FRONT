
function main() {
    
    botonesEntrdaSalida();
}
let botonesEntrdaSalida = () =>{
    const salida = document.getElementById("BTN-Salida");
    salida.addEventListener("click", () => { document.location.href= '/HTML/Salida.html' });

    const entrada = document.getElementById("BTN-Entrada");
    entrada.addEventListener("click", () => { document.location.href= "../entrada.html" });

}

main();