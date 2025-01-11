// Ejercicio 2: El menú del día 🍽️ 
// Escribe una función que reciba un objeto con platos y precios, y devuelva 
// los platos cuyo precio sea menor a $20. 
// Consigna: 
// • Usa un bucle for...in. 
// • Usa objetos y arrays.

let menu = {
    "Ensalada": 15,
    "Sopa": 8,
    "Carne": 25,
    "Pasta": 18
};

function platosMasBaratos (menu){
    for(let plato in menu){
        if(menu[plato] < 20){
            console.log(plato)
        }
    }
};
console.log(platosMasBaratos(menu));