// Actividad 1: Registro de libros favoritos
// Consigna: ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un
// programa que permita registrar libros favoritos en un archivo JSON.
// Implementa las siguientes funciones:
// 1. Agregar un libro: Se debe agregar un libro a la lista de favoritos.
// Para esto, el libro tendrá solo un campo: su nombre.
// 2. Listar los libros: Muestra todos los libros registrados.
// Pistas:
// • Usa un archivo JSON para guardar los libros.
// • Si el archivo no existe, comienza con un arreglo vacío.

const fs = require('fs');
const filePath = '.libros.json'

//Funcion para leer los libros
const leerLibros = () =>{
    //si el archivo no existe, crea un archivo vacio con un array
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
}

//Función para escribir los libros en el archivo
const escribirLibros = (libros) =>{
    fs.writeFileSync(filePath, JSON.stringify(libros, null, 2))
}

//Agregar un libro
const agregarLibro = (nombreLibro) =>{
    const libros = leerLibros() //Leer los libros existentes
    libros.push({id: libros.length + 1, nombre: nombreLibro}) //agregar un nuevo libro
    escribirLibros(libros) //guardar la lista actualizada
    console.log(`Libro agregado: "${nombreLibro}"`);
}

//listar los libros
const listarLibros = () =>{
    const libros = leerLibros()
        console.log("Lista de libros favoritos: ")
        libros.forEach(libro => {
            console.log(`${libro.id}. ${libro.nombre}`)
        });
}

agregarLibro('El principito');
listarLibros()