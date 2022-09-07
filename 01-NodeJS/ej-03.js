/*3. Escribe un módulo con una función que al recibir un string nos devuelva el número
de caracteres que tiene. Después impórtalo en tu “entry point” y utilízala para
devolver la longitud de “En un lugar de la mancha de cuyo nombre no quiero
acordarme”*/

let string = 'Nuestras vidas se definen por las oportunidades, incluso las que perdemos'

function stringCount(string) {
   console.log(string.length)
}

module.exports = stringCount
console.log(module)

let functionStringCount = require ("./stringCount")
string = 'En un lugar de la mancha de cuyo nombre no quiero acordarme'
console.log(functionStringCount(string))
CD