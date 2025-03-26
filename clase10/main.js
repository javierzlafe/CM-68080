//elemento.addEventListenner(evento,funcion)



/* 
function saludar(){
    let nombre = prompt("ingresa tu nombre")
    alert("bienvenido al sistema "+nombre)
}
boton.addEventListener("click",saludar) */


/* let boton = document.getElementById("boton")
boton.addEventListener("click", ()=>console.log("evento disparado")) */


//mouseover se activa cuando el mouse entra en el elemento seleccionado
//mouseout se activa cuando el mouse sale del elemento
//mousemove se activa cuando el mouse se mueve dentro de un elemento


/* let titulo = document.getElementById("titulo")

titulo.addEventListener("mousedown", ()=>console.log("disparamos en x coordenada"))
titulo.addEventListener("mouseup", ()=>console.log("recargando"))


titulo.addEventListener("mousemove", function(event){
    console.log("el mouse esta en la posicion x: "+ event.clientX + " y cruza con la posicion y: " + event.clientY)
}

)

 */

/* let inputField = document.getElementById("miCampoDeTexto")

inputField.addEventListener("change", function(event){
    console.log("valor del campo cambiado a: "+ event.target.value)
})

 */


//SUBMIT



let form = document.getElementById("miFormulario")

form.addEventListener("submit", function(event){
    if(form != null || form != null){
        alert("escribi algo")
    }
    event.preventDefault() //detiene el envio del formulario
    
})


