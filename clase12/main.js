



/* if(edad>= 18){
    console.log("es mayor, puede ingresar")
}else{
    console.log("sos menor, anda pa alla bobo")
}
 */

/* const mensaje = edad >=18 ? "si, es mayor de edad" : "sos menor"

console.log(mensaje)
 */



//operador logico and (&&)

/* let carrito = [1,2,3]

if(carrito.length ===0){
    console.log("el carrito esta vacio")
}


carrito.length !==0 && darAviso()

function darAviso(){
    alert(`${nombre}, tenes tu ${localStorage.getItem("carrito")} esperandote para terminar la compra`)
} */


/* const usuario1 = {
    nombre : "ignacio",
    edad: 28
}


const usuario2 = undefined


console.log(usuario2 || "el usuario no existe")




 */


/* 
const persona = {
    nombre:"javier",
    edad: 79,
    ciudad: "mar del plata",
    direccion:{
        calle:"falsa",
        numero:123
    }
}


const {direccion:calle}= persona;

console.log(calle) */

/* 
let preciosDollar = fetch(//http://consumoacalaapi)
let data = JSON.parse(preciosDollar)
 */




const data = {
    "timestamp":1653984562,
    "base": "USD",
    "rates":{
        "ARG_priceBlue4459": 1250,
        "COL":4200,
        "URU":43,
        "CHI":990,
        "MXN":20,
    }
}


const{ rates:{ARG_priceBlue4459: pochoclo}}= data

console.log("el dolar blue vale "+pochoclo)



