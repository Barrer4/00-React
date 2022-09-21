/*Crea una página en la que mostremos los datos de 4 casas diferentes. Almacena los
datos en un archivo de servicio ( como objetos de un array ) y después genera un
componente por cada una de las casas de forma automática.*/

let properties = [
     {
        price: '360.000 €',
        size: '45 m2',
        rooms: '1',
        bathrooms: '1',
        state: 'good',
        floor: '2nd',
        extras: 'None',
       
    },
     {
        price: '550.000 €',
        size: '72 m2',
        rooms: '2',
        bathrooms: '1',
        state: 'excellent',
        floor: '1st',
        extras: 'Parking',
    },
     {
        price: '475.000 €',
        size: '71 m2',
        rooms: '2',
        bathrooms: '2',
        state: 'good',
        floor: '3rd',
        extras: 'Parking',
    },
    {
        price: '750.000 €',
        size: '117 m2',
        rooms: '2',
        bathrooms: '1',
        state: 'ok',
        floor: '1st',
        extras: 'None',
    },
]

export default properties;