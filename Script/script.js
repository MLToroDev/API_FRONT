$(document).ready(() => {
    
    $.get("http://localhost:3000/api/producto", (rs) => {
        console.log(rs);
        let t = $("table");
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
 });
 
