//estructura del fetch

/* 
fetch("http://laapiquequiero")
.then(respuesta => respuesta.json())
.then( pochoclo =>{
    hacer lo que quiera con la info
}  )

*/
/* 
const API ="https://jsonplaceholder.typicode.com/posts"

fetch(API)
.then(response=>response.json())
.then(data =>{
    console.table(data)
}).catch(error=>{
    console.error("error",error)
})
 */




fetch("productos.json")
.then(response => response.json())
.then(data =>{

    const frutas = data.frutas

    const frutasContainer = document.getElementById("frutas-container")
    frutasContainer.className= ("pepe")
   

    frutas.forEach(fruta => {
        const frutaElement = document.createElement('p');
        frutaElement.textContent = `Nombre: ${fruta.nombre}, Color: ${fruta.color}, Sabor: ${fruta.sabor}`;
        frutasContainer.appendChild(frutaElement);
      });
    }).catch(error=>{console.log("rompi todo")})