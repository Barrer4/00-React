/* 1. Se pretende crear una clase llamada Cifras que tenga lo siguiente:
      a. Un constructor que permite inicializar un número con el valor pasado como argumento.
      b. Un método llamado esPar que devuelve verdadero si lo es y falso en caso contrario.
      c. Un método llamado sumaDigitos que devuelve un entero con la suma de sus dígitos.*/

class Cifras {
   constructor(numero) {
      this.numero = numero
   }

   esPar() {
      this.numero % 2 === 0
         ? console.log(this.numero + ' es un número par')
         : console.log(this.numero + ' es un número impar')
   }

   sumaDigitos() {
      let suma = 0
      let numero = this.numero.toString()

      for (let i = 0; i < numero.length; i++) {
         suma += parseInt(numero[i])
      }
      return (console.log('La suma de los dígitos de ' + this.numero + ' es ' + suma))
   }
}

let num = new Cifras(4599)
num.esPar()
num.sumaDigitos()