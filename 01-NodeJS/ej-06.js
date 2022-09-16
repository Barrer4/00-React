/*6. Crea un módulo en una carpeta llamada “funciones” que contenga una función que
nos devuelve el factorial de un número que le llega por argumento. Después, en la
raiz de nuestro proyecto, utiliza el número que devuelve esa función para enseñar el
supervillano correspondiente del paquete npm “supervillains”. Llama a la función
cuatro veces con un número aleatorio entre 1 y 20 */


//Generando un número aleatorio entre 1 y 20
function pushNumber() {
   let randomNumber = parseInt(Math.random() * (20 - 1) + 1);
   return randomNumber;
}


//Exportando el número aleatorio
module.exports = pushNumber();


//Importando la función factorial
let pullFactorial = require("./funciones/factorial");


//Importando supervillains
let supervillains = require('supervillains');


//Mostrar al supervillano correspondiente al número factorial
let number = pullFactorial(pushNumber());
console.log(`Supervillain with factorial #`);
console.log(supervillains.random(number));


//Mostrar al supervillano 4 veces con un número aleatorio entre 1 y 20
for (let i = 1; i <= 4; i++) {
   console.log(`Supervillain #${i}`);
   console.log(supervillains.random(pushNumber()));
}
