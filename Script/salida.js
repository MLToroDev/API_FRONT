$(document).ready(function () {
    cargarproductos()
    cargarTabla()
})

function cargarproductos() {
    let t = $("#inputState");
    t.empty();

    $.get("http://localhost:3000/api/producto", (rs) => {

        rs.forEach(Producto => {
            t.append(
                `<option>${Producto.Nombre}</option>`);
        });
    })
}
$('#BtnEntrada').click(() => {
    document.location = "index.html"
})

function cargarTabla(){
    let t = $("tbody");
    t.empty();
    
    $.get("http://localhost:3000/api/producto/salida", (rs) => {
      
       
        rs.forEach(Producto => {
            t.append(`<tr>
         
            <td>${Producto.Nombre}</td>
            <td>${Producto.Cantidad}</td>
            <td>${Producto.PrecioV}</td>
            <td>${Producto.Cliente}</td>
            <td>${Producto.Fecha}</td>
            </tr>`);
        });
    })
  }
  $('#BtnRegistrar').click(() => {
    const Nombre = $('#inputState')
    const Cantidad = $('#cantidad');
    const PrecioV = $('#precioV');
   const cliente = $('#cliente');
   const fecha = $('#fecha');

   console.log(fecha.val())

   let p = {
        Nombre: Nombre.val(), Cantidad: Cantidad.val(),
        PrecioV: PrecioV.val(), Cliente: cliente.val(),Fecha: fecha.val(),
    }
    console.log(p)

    $.post("http://localhost:3000/api/producto/salida", p, (rs) => {
        
           Swal.fire({
             icon: 'success',
             title: 'Listo',
             text: 'El registro de la salida fue exitoso',
             confirmButtonColor: '#198754',
             iconColor: '#198754'
           })
           cargarTabla();
  }).fail(() => {
   Swal.fire({
     icon: 'error',
     title: 'Oops...',
     text: 'Salida incorrecto, verifique haber ingresado todos los datos',
     confirmButtonColor: '#198754',
     iconColor: '#198754'
   })
 })
});