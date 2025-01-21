// Ejercicio 2: Descubre tu perfil
// Consigna:
// Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste
// en el ejercicio anterior y muestra la información en la consola para
// asegurarte de que todo está correcto.
//  Pista: Utiliza fs.readFile con la codificación 'utf-8' para obtener el
// contenido del archivo como texto legible.

const fs = require('fs');

const leerPerfiles = () =>{ 
fs.readFile('perfil.json', 'utf-8', function(err,data){
    if (!err){
        console.log(data);
        
    } else{
        throw err
    }
})}

leerPerfiles()