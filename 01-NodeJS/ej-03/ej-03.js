/*3. Escribe un módulo con una función que al recibir un string nos devuelva el número
de caracteres que tiene. Después impórtalo en tu “entry point” y utilízala para
devolver la longitud de “En un lugar de la mancha de cuyo nombre no quiero
acordarme”*/


//Importar función desde obj-03.js
let functionStringCount = require ("./obj-03.js")

//Definir string
let string = 'En un lugar de la mancha de cuyo nombre no quiero acordarme'

//Implementar función con la variable deseada
console.log(functionStringCount(string))




/*Lo visto en clase:

function stringCountcuentaCaracteres(frase){
   return frase.length
}

module.exports = cuentaCaracteres
let comosea = require("./string")

comosea("En un lugar de la mancha de cuyo nombre no quiero acordarme")
*/