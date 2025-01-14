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

estudiantes.forEach(estudiante => {
    console.log(estudiante.nombre);
});

//////////////Arreglar funcion
function calcularPromedio(estudiante, nombre) {
    const sumaNotas = estudiante.notas.reduce((suma, nota) => suma + nota, 0);
    return sumaNotas / estudiante.notas.length;
};
// console.log(calcularPromedio(estudiantes,))

const nuevoEstudiante = { 
    nombre: "Lucia", 
    edad: 23, 
    curso: "Data Science", 
    notas: [8, 9, 7, 10] 
};
estudiantes.push(nuevoEstudiante);

const estudianteJson = JSON.stringify(estudiantes, null, 2); 
console.log(estudianteJson);