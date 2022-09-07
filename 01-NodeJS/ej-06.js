/*6. Crea un módulo en una carpeta llamada “funciones” que contenga una función que
nos devuelve el factorial de un número que le llega por argumento. Después, en la
raiz de nuestro proyecto, utiliza el número que devuelve esa función para enseñar el
supervillano correspondiente del paquete npm “supervillains”. Llama a la función
cuatro veces con un número aleatorio entre 1 y 20 */

//Importando la función factorial
let factorial = require("./obj-06")

//Importando supervillains
let supervillains = require('supervillains')

//Generando un número aleatorio
const a = Math.random() * (10-1) + 1
for (let i = 1; i <= 4; i++) {
   console.log(supervillains.random(factorial))
}
