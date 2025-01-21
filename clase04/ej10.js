/*Ejercicio 10: ¡Haz un respaldo de tus metas! 
Consigna:
Nunca está de más guardar una copia de seguridad. Escribe un programa 
que copie el contenido de metas.json en un archivo llamado 
respaldo_metas.json.
Pista: Usa el método fs.copyFile para copiar archivos de manera 
sencilla.*/
const fs = require('fs')
const filePath = './metas.json'


fs.copyFile(filePath, 'respaldo_metas.json', (err)=>{
    if(err){
        throw err
    }else{
        console.log("Archivo copiado exitosamente"); 
    }
})