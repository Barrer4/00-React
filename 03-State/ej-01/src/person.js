/*Crea una SPA en la que muestres la información de nuestro usuario. Almacena el
objeto en un archivo de servicio:*/

let persona = {
    nombre: "Paco",
    edad: 36,
    nacimiento: 1986,
    direccion: {
        calle:"Sésamo",
        numero: 14,
        piso: "3-D",
        cp: 34532,
        ciudad: "Gotham"
    },
    grupoSanguineo: {
        grupo: "O",
        rh: "+"
    }
}

export default persona;