/*5. Crea un módulo con el siguiente objeto:

let objeto = {
   favoritos: [1,3,5],
   paises: {
      a: ["albania","andorra"],
      b: ["bélgica","brasil"],
      c: ["canadá", "cuba"]
   },
   nombre: "Antonio",
}

Después, importa el módulo desde tu “entry point” y enseña los países favoritos de
Antonio (entendiendo que todos los países se pueden concatenar en un solo array)*/


//Importar objeto desde el archivo obj-05.js
let data = require ("./obj-05")
let countries = data.paises.a.concat(data.paises.b)
countries = countries.concat(data.paises.c)


for (let i = 0; i < data.favoritos.length; i++) {
   let fav = data.favoritos[i]
  
   let favCountries = ''
   favCountries += countries[fav]

   console.log(favCountries)
}
