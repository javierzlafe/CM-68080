

/* 
let pochoclo = document.getElementById("parrafo")
console.log(pochoclo.innerHTML)


let titulo = document.getElementsByClassName("titulo")
console.log(titulo[2].innerHTML)


let texto = document.getElementsByTagName("p")
console.log(titulo[2].innerHTML)
 */



/* let heladera = document.getElementById("parrafo")

heladera.innerHTML = "<h1>este es un parrafo modificado desde js</h1>" */


/* 
let parrafo = document.createElement("p")

parrafo.innerHTML = "<p>esto es un parrafo directamente inyectado desde js</p>"

document.body.appendChild(parrafo) */


/* 
let producto = {id:1,nombre:"arroz", precio:1500}
let concatenado = "ID: "+ producto.id + "Producto: "+ producto.nombre + " precio: " + producto.precio
let plantilla = `id: ${producto.id} nombnre: ${producto.nombre}` */





/* let productos =[
    {id:1,nombre:"arroz", precio:1500},
    {id:1,nombre:"fideos", precio:1500},
    {id:1,nombre:"pan", precio:1500},
]

for (const x of productos){

    let contenedor = document.createElement("div")
    contenedor.innerHTML= ` <h3> ID: ${x.id}
                            <h1> Nombre: ${x.nombre}
                            <h2> precio: ${x.precio}`
    document.body.appendChild(contenedor)

}
 */



let parrafo = document.querySelector(".parrafo")
let titulo = document.querySelector("#titulo")
let todoslosparrafos= document.querySelectorAll("p")











