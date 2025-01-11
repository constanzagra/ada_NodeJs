// Ejercicio 6: Calculadora de promedio       
// Escribe una función que reciba un array de números y devuelva el 
// promedio. 
// Consigna: 
// • Usa un bucle for para sumar los números. 
// • Divide la suma total entre la cantidad de elementos del array. 
let numeros = [8, 9, 10, 7, 6];

function calcularPromedio (numeros){
    suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i]
    };
    let promedio = suma / numeros.length;
    return promedio
};

console.log(calcularPromedio(numeros));