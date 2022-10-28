/*4. Realiza una clase Finanzas que convierta dólares a euros y viceversa. Codifica los métodos dolaresToEuros y eurosToDolares.*/ 

class Finanzas {
   constructor(valor){
      this.valor = valor
   }

   dolaresToEuros(){
      console.log(this.valor + '$ es igual a ' + this.valor * 0.85 + '€')
   }

   eurosToDolares(){
      console.log(this.valor + '€ es igual a ' + this.valor * 1.17 + '$')
   }
}

let val1 = new Finanzas(1000)
console.log(val1)
val1.dolaresToEuros()
val1.eurosToDolares()