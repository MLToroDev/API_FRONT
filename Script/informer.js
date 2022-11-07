
$(document).ready(() => {




});

$('#btnBuscar').click(() => {
  
  let t = $("tbody");
  t.empty();
  const Codigo = $('#codigo');
  let p = Codigo.val()

  console.log(p);


  $.get("http://localhost:3000/api/producto/buscar/" , p, (rs) => {
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
    console.log(rs);
  })
});
