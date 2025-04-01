
//ABM   significa alta,baja,modificacion


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



if(localStorage.getItem("productos")){
    lista= JSON.parse(localStorage.getItem("producto"))
}else{
    lista=lista
}





//-------------------0--------------------------

//filtrar los productos para poder modificarlos


function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que buscas").trim().toUpperCase()
    let resultado = lista.filter( (x)=> x.nombre.toUpperCase().includes(palabraClave)  )

    if(resultado.length >0){ // si es mayor a 0, significa que al menos un resultado encontro
        console.table(resultado)
    }else{
        alert("no se encontraron coincidencias en la base")
    }
}




/* function agregarProducto(){
    let nombre = prompt("ingresa el nombre del producto").trim();
    let precio = parseFloat(prompt("ingresa el precio del producto"));
    let stock = parseInt(prompt("ingresa el stock del producto"))
    if(isNaN(precio) || isNaN(stock) || nombre === ""){ //si los datos son erroneos o vacios capturo el error
    alert("por favor ingrese datos validos")
    return; // si no pongo que retorne, me guareda el producto como NAN
    }
    let producto = new Producto(nombre,precio,stock)
    lista.push(producto)
    console.table(lista)
} */



function agregarProducto(){

    Swal.fire({

        title: "agregar producto",
        html:`<label>Nombre:</label> <input id="nombre-input" class="swal2-input" type= "text" autofocus> 
              <label>Precio:</label> <input id="precio-input" class="swal2-input" type= "number" step="0.01">
              <label>Stock:</label> <input id="stock-input" class="swal2-input" type= "number" step="1">`,
        showCancelButton:true,
        confirmButtonText: "Agregar",
        cancelButtonText:"Cancelar",
    }).then( (result)=>{
        if(result.isConfirmed){
            let nombre= document.getElementById("nombre-input").value.trim()
            let precio= parseFloat(document.getElementById("precio-input").value) 
            let stock= parseInt(document.getElementById("stock-input").value) 
            //validacion

            if(isNaN(precio) || isNaN(stock) || nombre === ""){
                Swal.fire({
                    icon:"error",
                    title:"Error",
                    text: "por favor ingresa datos validos"
                });
                return
            }

            //creo el producto
            let producto = new Producto(nombre,precio,stock)


            if(lista.some((elemento)=> elemento.nombre === producto.nombre)){
                Swal.fire({
                    icon:"warning",
                    title:"advertencia",
                    text:"el producto ya existe en la lista"
                })
                return
            }

            lista.push(producto)

            Swal.fire({
                icon:"success",
                title:"Producto agregado",
                text:`se agrego correctamente el producto ${producto.nombre} a la lista`,
                timer:3000//tiempo en milisegundos para cerrar la ventana automaticamente
            })
            console.table(lista)

        }
    }  )



}




//botonera

let boton = document.getElementById("boton")
boton.addEventListener("click",agregarProducto)





 


//para el after, agregar botonera, manipular dom, 
//mostrar resultados en pantalla, y guardar info en el storage