// Ejercicio 1: ¿Quién puede entrar al parque?       
// Tienes un parque de diversiones que permite la entrada a personas 
// mayores de 12 años y menores de 60. Escribe una función que reciba una 
// lista de edades y devuelva cuántas personas pueden entrar al parque. 
// Consigna: 
// • Usa un bucle for y condicionales. 
// • Usa un array como entrada de la función. 
// • Devuelve el número de personas que cumplen con los requisitos.

let edades = [10, 15, 35, 65, 12, 59, 5, 35, 7, 98, 56];

function entradaAlParque (edades){
    let podesPasar = [];
    for(let i = 0; i < edades.length; i++){
        if(edades[i] >= 12 && edades[i] <= 60){
            podesPasar.push(edades[i])
        }
    }
    return `Pudieron ingresar: ${podesPasar.length} personas`
};
console.log(entradaAlParque(edades));