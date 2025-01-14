// Ejercicio 2: Conversión de Objetos JavaScript a JSON  
// 1.En la misma carpeta clase2, crea un nuevo archivo llamado 
// actividad2.js.  
// 2.Crea un objeto en JavaScript que represente a un estudiante con las 
// siguientes propiedades: nombre, edad, curso, notas (un array de 
// números). 
// Instrucciones: 

let estudiante = {
    nombre: "Camila",
    edad: 21,
    curso: "Sociologia",
    notas: [4, 9, 2, 8]
};

// • Convierte este objeto a una cadena JSON usando JSON.stringify(). 
let estudianteJSON = JSON.stringify(estudiante);

// • Muestra la cadena JSON en la consola. 
console.log(estudianteJSON)

// • Luego, convierte la cadena JSON de nuevo a un objeto utilizando 
// JSON.parse() y muestra el objeto en la consola.
let estudianteObjJS = JSON.parse(estudianteJSON);
console.log(estudianteObjJS);