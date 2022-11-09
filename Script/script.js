

$(document).ready(() => {
cargarTabla();



   

});
$('#BtnSalida').click(()=>{
  document.location = "salida.html"
})



function cargarTabla(){
  let t = $("tbody");
  t.empty();
  
  $.get("http://localhost:3000/api/producto", (rs) => {
    
     
      rs.forEach(Producto => {
          t.append(`<tr>
          <td>${Producto.Codigo}</td>
          <td>${Producto.Nombre}</td>
          <td>${Producto.Cantidad}</td>
          <td>${Producto.ValorU}</td>
          <td>${Producto.PrecioV}</td>
          <td>${Producto.Cliente}</td>
          </tr>`);
      });
  })
}



$('#BtnRegistrar').click(() => {
     const Codigo = $('#codigo');
     const Nombre = $('#producto')
     const Cantidad = $('#cantidad');
    const ValorU = $('#valorU');
     const PrecioV = $('#precioV');
    const cliente = $('#proovedor');

    let p = {
        Codigo: Codigo.val(), Nombre: Nombre.val(), Cantidad: Cantidad.val(), ValorU: ValorU.val(),
         PrecioV: PrecioV.val(), Cliente: cliente.val()
     }
     $.post("http://localhost:3000/api/producto", p, (rs) => {
         
            Swal.fire({
              icon: 'success',
              title: 'Listo',
              text: 'El registro del producto fue exitoso',
              confirmButtonColor: '#198754',
              iconColor: '#198754'
            })
            cargarTabla();
   }).fail(() => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Registro incorrecto, verifique haber ingresado todos los datos',
      confirmButtonColor: '#198754',
      iconColor: '#198754'
    })
  })
});





