/*6. Crea un módulo en una carpeta llamada “funciones” que contenga una función que
nos devuelve el factorial de un número que le llega por argumento. Después, en la
raiz de nuestro proyecto, utiliza el número que devuelve esa función para enseñar el
supervillano correspondiente del paquete npm “supervillains”. Llama a la función
cuatro veces con un número aleatorio entre 1 y 20 */


//Generando un número aleatorio entre 1 y 5 (lo cambié después de ver la corrección)
function pushNumber() {
   let randomNumber = parseInt(Math.random() * (5 - 1) + 1);
   return randomNumber;
}


//Exportando el número aleatorio
module.exports = pushNumber();


//Importando la función factorial
let pullFactorial = require("./funciones/factorial");


//Importando supervillains
let supervillains = require('supervillains');


//Mostrar al supervillano 4 veces con el factorial del número aleatorio entre 1 y 5
for (let i = 1; i <= 4; i++) {
   console.log(`Supervillain #${i}`);
   console.log(supervillains.all[pullFactorial(pushNumber())]); //<- había hecho una variable number=pullFactorial(pushNumber()) pero el for siempre se ejecutaba con el mismo supervillano.
}

