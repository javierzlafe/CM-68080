

const Producto = function( nombre,precio,stock){
    this.nombre = nombre,
    this.precio = precio,
    this.stock = stock
}
let producto1= new Producto("lenovo",350000,20)
let producto2= new Producto("lg",350000,20)
let producto3= new Producto("apple",350000,20)
let producto4= new Producto("xiaomi",350000,20)
const lista = [producto1,producto2,producto3,producto4]

function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que buscas").trim().toUpperCase()
    let resultado = lista.filter( (x)=> x.nombre.toUpperCase().includes(palabraClave)  )

    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontraron coincidencias en la base")
    }
}