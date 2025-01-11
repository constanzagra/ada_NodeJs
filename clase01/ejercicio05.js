// Ejercicio 5: Generador de iniciales 🅰️ 
// Escribe una función que reciba un nombre completo y devuelva las 
// iniciales en mayúsculas. 
// Consigna: 
// • Usa el método split() para dividir el nombre. 
// • Usa un bucle for y métodos de string. 
let nombre = "constanza guillermina riveros ayala";

function devuelveIniciales (nombre){
    nombre = nombre.split(" ");
    let iniciales = "";
    for(let i = 0; i < nombre.length; i++){
        iniciales += nombre[i][0]
    }
    iniciales = iniciales.toUpperCase();
    return iniciales
};
console.log(devuelveIniciales(nombre))