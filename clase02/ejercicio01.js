// Ejercicio 1: Creación y Manipulación de un Objeto JSON 
// 1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada 
// clase2.  
// 2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.  
// 3.En este archivo, crea un objeto JSON que represente un libro. El objeto 
// debe tener las siguientes propiedades: titulo, autor, año, genero (puede 
// ser un array de géneros). 
// Instrucciones: 

// • Muestra el objeto actualizado en la consola.
let libro = {
    "titulo": "Nuestra parte de noche",
    "autor": "Mariana Enriquez",
    "anio": 2019,
    "genero": ["terror", "ficcion gotica"]
};

// • Muestra en la consola el título y el autor del libro. 
console.log("Titulo:", libro.titulo, "Autora:", libro.autor);

// • Actualiza el año del libro a un valor más reciente. 
libro.anio = 2025;
console.log(libro.anio)

// • Añade una nueva propiedad llamada páginas que indique el número 
// de páginas del libro. 
libro.paginas = 190;

console.log(libro);