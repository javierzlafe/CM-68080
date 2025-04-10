

/* //setTimeOut (funcion, tiempo)

function saludar(){
    console.log("hola mundo")
}


setTimeout(saludar,5000) //= 5 segundos

console.log("estoy debajo de saludar") */


/* console.log("inicio de proceso")

setTimeout(() => {
    console.log("mitad de proceso")
}, 2000);

console.log("fin de proceso") */


/* const btn = document.querySelector("#boton")
const popup = document.querySelector("#popup-mensaje")


btn.addEventListener("click",() =>{  
    popup.classList.add("popup-active")
    setTimeout( ()=>{ 
        popup.classList.remove("popup-active")
    },3000)
       })

 */


       //setInterval (funcion, tiempo)

      
      /*  let numero= parseInt(prompt("ingresa los segundos")) 
       let segundos = numero * 1000
       
      let time = setInterval( ()=>{
        const date = new Date();
        console.log(date.toLocaleTimeString())
       },  1000 )


       setTimeout( ()=>{
        clearInterval(time)
       }, segundos  ) */


    /*    const promesa =  new Promise(   (resolve,reject)=>{
        //voy a la base de datos a buescar pochoclos
       })


       promesa.then(  ()=>{
        //aca pongo lo que quiero acer con la respuesta satisfactoria
       }).catch( error=>{
        //manejo el error si la promesa se rechaza
       })


 */


       function leerArchivo(){
       return new Promise (resolve=>{
        setTimeout(  ()=>{
            resolve ("che, aca esta el contenido del archivo")
        },5500  )
       })   //resuelta o rechazada
       }


       
       async function procesoAsincronico(){
        console.log("iniciando lectura de archivo...")
        
        const contenido= await leerArchivo()
        console.log("el archivo se leyo correctamente")
        console.log(contenido)
       }


       procesoAsincronico()