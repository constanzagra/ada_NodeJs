// Ejercicio 9: Filtra tus metas completas    
// Consigna: 
// Supongamos que cada meta tiene un estado: “completa” o “pendiente”. 
// Filtra las metas que ya completaste y muéstralas en la consola. 
// Pista: Modifica las metas para que sean objetos con un atributo 
// estado. Usa el método filter para obtener las completas. 

const fs = require('fs');
const filePath = './metas.json';

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
        listaMetas.push({nombre:"Aprender Node.js", estado: "pendiente"}); 
        listaMetas.push({nombre: "Viajar a Japon", estado: "completa"}); 
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

fs.readFile(filePath,'utf-8', (err, data) =>{
    if(err){
        throw err;
    }else{
        const listaMetas = JSON.parse(data); 
        const metasCompletadas = listaMetas.filter(meta => meta.estado === 'completa')
        console.log("Las Metas completadas son : "); 
        console.log(metasCompletadas); 
    }
})