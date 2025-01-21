// Ejercicio 6: Tu lista de metas        
// Consigna: 
// Es momento de planear tus metas. Crea un archivo llamado metas.json 
// con una lista vacía al principio. Luego, agrega metas como: “Aprender 
// Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo. 
// Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la 
// lista. 
const fs = require('fs');

const filePath = './metas.json'

if(!fs.existsSync(filePath)){
    fs.writeFile(filePath, '[]', (err) =>{
        if(err){
            throw err;
        } else {
            console.log("Se ha generado el nuevo archivo vacio");
        }
    })
}else{
    fs.readFile(filePath,'utf-8', (err, data) =>{
        if(err){
            throw err;
        }else{
            const listaMetas = JSON.parse(data); 
            listaMetas.push({nombre:"Aprender Node.js"}); 
            listaMetas.push({nombre: "Viajar a Japon"}); 
            fs.writeFile(filePath, JSON.stringify(listaMetas, null, 2), (err)=>{
                if(err){
                    throw err;
                }else{
                    console.log("Metas existosamente agregadas al archivo");
                }
            })
        }
    
    })
}