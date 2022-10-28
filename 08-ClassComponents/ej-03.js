/* 3. Diseñar una clase llamada Rectángulo que contenga :
      a. Un constructor que permita declarar objetos con dos argumentos (largo y ancho)
      b. Un método llamado calcularArea que devuelve el área del rectángulo
      c. Un método llamado calcularPerimetro que calcula el perímetro del rectángulo. */

class Rectangulo {
   constructor(largo, ancho){
      this.largo = parseInt(largo)
      this.ancho = parseInt(ancho)
   }

   calcularArea(){
      console.log('El área del rectángulo es: ' + this.largo * this.ancho)
   }
   
   calcularPerimetro(){
      console.log('El perímetro del rectángulo es: ' + 2*(this.largo + this.ancho))
   }
}

let rect1 = new Rectangulo(54,23)
console.log(rect1)
rect1.calcularArea()
rect1.calcularPerimetro()