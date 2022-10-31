/* 2. Crea una clase Distancia con un método MillasAMetros() que toma como parámetro de entrada un valor en millas y las convierte a metros.
      a. Una vez tengas este método escribe otro MillasAKilometros() que realice la misma conversión, pero esta vez exprese el resultado en kilómetros. Nota: 1 milla equivale a 1609,34 metros. */

class Distancia {
   constructor(millas) {
      this.millas = millas
   }

   millasAMetros(){
      let metros = parseInt(this.millas * 1609.34)
      console.log(this.millas + ' millas equivalen a ' + metros + ' metros')
   }

   millasAKilometros(){
      let km = parseInt(this.millas * 1609.34 * 1000)
      console.log(this.millas + ' millas equivalen a ' + km + ' kilómetros')
   }
}

let millas = new Distancia(543)
millas.millasAMetros()
millas.millasAKilometros()