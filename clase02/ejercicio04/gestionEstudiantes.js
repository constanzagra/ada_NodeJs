// Ejercicio 4: Gestión de Estudiantes 
// Instrucciones 
// 1. Dentro de la carpeta clase2/ejercicio4, crea dos archivos: 
// o estudiantes.js 
// o gestionEstudiantes.js 

// 3. En gestionEstudiantes.js: 
// o Importa el array desde estudiantes.js. 
// o Muestra en la consola los nombres de todos los estudiantes. 
// o Calcula y muestra el promedio de notas de un estudiante 
// específico. 
// o Agrega un nuevo estudiante al array y muestra el array 
// actualizado en formato JSON.
const { estudiantes } = require('./estudiantes');

for(let i = 0; i < estudiantes.length;i++){
    console.log(estudiantes[i].nombre)
};

let suma = 0;
let estudiante = estudiantes.notas;
console.log(estudiante)

function calcularPromedio (estudiante){
    //return notas
    // for(let i = 0; i < notas.length; i++){
    //     suma += notas[i]
    // }
    // let promedio = suma / notas.length;
    // console.log(promedio)
}

console.log(calcularPromedio(estudiantes))