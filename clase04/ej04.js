// Ejercicio 4: ¿Existe tu perfil?     
// Consigna: 
// Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json 
// existe. Si no existe, crea uno nuevo con un perfil básico. 
// Pista: Usa fs.existsSync para verificar la existencia del archivo. 
const fs = require('fs')
const filePath = './perfil.json'
const newPerfil = {nombre: 'Ana Paula', edad: 23, ciudadFavorita: 'Madrid', hobby: 'futbol'}

if(fs.existsSync(filePath)){
    console.log("El Archivo existe");
}else{
    fs.writeFile(filePath,JSON.stringify(newPerfil, null, 2),(err) =>{
    if(err){
        console.log(err)
    }else{
        console.log(`Ha sido creado el nuevo perfil: `)
        console.log(newPerfil); 
    }
    }) 
    
};