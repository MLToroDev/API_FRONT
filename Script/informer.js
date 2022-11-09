
$(document).ready(() => {
});

$('#btnBuscar').click(() => {

  let t = $("tbody");
  t.empty();
  const Codigo = $('#Codigo');
  let p = Codigo.val()


  $.get("http://localhost:3000/api/producto/buscar/" + p, (rs) => {
    
    if (rs != undefined) {
      rs.forEach(Producto => {
        t.append(`<tr>
          <td>${Producto.Codigo}</td>
          <td>${Producto.Nombre}</td>
          <td>${Producto.Cantidad}</td>
          <td>${Producto.ValorU}</td>
          <td>${Producto.PrecioV}</td>
          <td>${Producto.Cliente}</td>
          </tr>`);
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El producto no existe',
        confirmButtonColor: '#198754',
        iconColor: '#198754'
      })

    }


  }).fail(() => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El producto no existe, ingrese un código correcto.',
      confirmButtonColor: '#198754',
      iconColor: '#198754'
    })
  })
});
