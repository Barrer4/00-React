/*6. Crea un módulo en una carpeta llamada “funciones” que contenga una función que
nos devuelve el factorial de un número que le llega por argumento. Después, en la
raiz de nuestro proyecto, utiliza el número que devuelve esa función para enseñar el
supervillano correspondiente del paquete npm “supervillains”. Llama a la función
cuatro veces con un número aleatorio entre 1 y 20 */


//Generando un número aleatorio entre 1 y 20
function pushNumber(){
   let randomNumber = parseInt(Math.random() * (20-1) + 1)
      return randomNumber
   }
   
//Exportando el número aleatorio
   module.exports = pushNumber()
   
//Importando la función factorial
let pullFactorial = require("./funciones/obj-06")

//Importando supervillains
let supervillains = require('supervillains')

for (let i = 1; i <= 4; i++) {
   console.log(supervillains.random(pullFactorial))
   
}
