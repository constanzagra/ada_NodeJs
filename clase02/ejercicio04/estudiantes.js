// Ejercicio 4: Gestión de Estudiantes 
// Instrucciones 
// 1. Dentro de la carpeta clase2/ejercicio4, crea dos archivos: 
// o estudiantes.js 
// o gestionEstudiantes.js 
// 2. En estudiantes.js: 
// o Crea un array de objetos que represente una lista de 
// estudiantes. 
// o Cada estudiante debe tener las propiedades: nombre, edad, 
// curso y notas (un array de números). 
// o Exporta este array usando module.exports. 

let estudiantes = [
    {   nombre: "Ana",
        edad: 22,
        curso: "Desarrollo Web",
        notas: [7, 9, 3, 8]
    },
    {   nombre: "Lourdes",
        edad: 24,
        curso: "Backend",
        notas: [6, 7, 10, 5]
    },
    {   nombre: "Constanza",
        edad: 26,
        curso: "Backend",
        notas: [9, 6, 7, 4]
    },
    {   nombre: "Sofia",
        edad: 25,
        curso: "Frontend",
        notas: [10, 7, 8, 5]
    },
    {   nombre: "Camila",
        edad: 27,
        curso: "UX/UI",
        notas: [9, 8, 10, 7]
    }
];

module.exports = {
    estudiantes
};