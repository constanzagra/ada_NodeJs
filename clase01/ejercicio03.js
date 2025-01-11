// Ejercicio 3: Ordenando números       
// Crea una función que reciba un array de números y devuelva un nuevo 
// array con los números ordenados de menor a mayor. 
// Consigna: 
// • Usa el método sort(). 
let numeros = [6, 1, 8, 3, 7];

function ordenarNumeros (numeros){
    let numerosOrdenados;
    numerosOrdenados = numeros.sort();
    return numerosOrdenados
};
console.log(ordenarNumeros(numeros));