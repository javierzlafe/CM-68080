
//4 metodos para el uso del storage

/* 
SetItem ()  permite crear una clave y asignarle un valor
getItem() permite recuperar o traer una clave desde el storage
removeItem() para eliminar un dato
clear() limpiar (borra todo, pero todo todo)
*/



const inputNombre = document.querySelector("#inputName")
const inputedad = document.querySelector("#inputNumber")
const inputemail = document.querySelector("#inputEmail")
const inputprofesion = document.querySelector("#inputProfession")
const boton = document.getElementById("send")

/* function guardarForm(){
    localStorage.setItem("nombre", inputNombre.value)
    localStorage.setItem("edad", inputedad.value)
    localStorage.setItem("email", inputemail.value)
    localStorage.setItem("profesion", inputprofesion.value)
}
 */

//creando un objeto del formulario
/* function guardarForm(){

    const datosDelFormulario ={
    nombre: inputNombre.value,
    edad: inputedad.value,
    email: inputemail.value,
    profesion: inputprofesion.value,
    }
    
    let resultado = JSON.stringify(datosDelFormulario) 
    localStorage.setItem("datos", resultado)

    console.log(resultado)
    console.log(datosDelFormulario)

} */




boton.addEventListener("click", guardarForm)


/* 
function recuperarDatosParaPishing(){
    inputNombre.value = localStorage.getItem("nombre")
    inputedad.value = localStorage.getItem("edad")
    inputemail.value = localStorage.getItem("email")
    inputprofesion.value = localStorage.getItem("profesion")
}


let garca = document.getElementById("garca")

garca.addEventListener("click", recuperarDatosParaPishing) */


/* for(let i=0; i<localStorage.length; i++){
    let clavesRecuperadas = localStorage.key(i)
    console.log("clave "+clavesRecuperadas)
    console.log("Valor "+ localStorage.getItem(clavesRecuperadas))
} */




/* function recuperarDatosDelFormulario(){
    const datosDelForm= json.parse( localStorage.getItem("datos"))
    console.log(datosDelForm)
}
 */


/* const persona = {
nombre: "jaime",
profesion: "colectivero"
}
 persona.profesion
 */