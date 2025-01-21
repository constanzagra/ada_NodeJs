// Ejercicio 8: Cuenta tus metas        
// Consigna: 
// ¿Sabes cuántas metas has establecido? Escribe un programa que lea tu 
// archivo metas.json y cuente cuántas metas tienes actualmente. 
// Pista: Usa length para obtener la cantidad de elementos en la lista.

const fs = require('fs')
const filePath = './metas.json'

fs.readFile(filePath, 'utf-8', (err, data) =>{
    if(err){
        throw err
    }else{
    const listaMetas = JSON.parse(data); 
    console.log(`La cantidad de metas establecidas es ${listaMetas.length}`)
    }
});