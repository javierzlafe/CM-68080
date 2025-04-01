/* 

const db1 = [ 1,2,3,4,5,6,7,8,9,10]

const db2= ["marcelo","sebastian","antonella","ignacio","franco","cristian"]

const dbFinal= [db1,db2]

console.log(dbFinal) */


/* 

const persona1 = {
    nombre:"gregorio",
    edad:25,
    curso:"javaScript",
    profe:"javier gimenez",
    dias:"lunes y miercoles"
}
 */

/* const persona2 = {
    ...persona1,
    nombre:"cristian",
    edad:22
}

const persona3 ={
    ...persona2,
    nombre: "jesus",
    edad:35
}

console.log(persona1)
console.log(persona2)
console.log(persona3) */




function sum(...preciosCarrito){
    return preciosCarrito.reduce( (acc,n)=> acc+n )
}






const number = [1,2,3,4,5,6,7,8,4,651,681,321,6841,351,96841,6351,684,351,684,6351,684,351,684,351,681,351,684,651,6841,9681,968,165,16,851,546]

const result = sum(...number)







function sumar (...numeros){return numeros.reduce( (acc,n)=> acc+n )}