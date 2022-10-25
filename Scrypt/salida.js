function main () {
    botonesEntrdaSalida();
}
let botonesEntrdaSalida = () =>{
    const salida = document.getElementById("BTN-Entrada");
    salida.addEventListener("click", () => { document.location.href= "../entrada.html" });

    const entrada = document.getElementById("BTN-Salida");
    entrada.addEventListener("click", () => { document.location.href= '/HTML/Salida.html' });

}

main();
