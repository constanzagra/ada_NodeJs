// Ejercicio 7: Encuentra tu meta perdida     
// Consigna: 
// Revisa tu lista de metas en el archivo metas.json. Busca si una meta 
// específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala. 
// Pista: Usa fs.readFile para leer el archivo y un método como find para 
// buscar en la lista.

const fs = require('fs');
const filePath = './metas.json';
let metaEspecifica = 'Viajar a Japón';

fs.readFile(filePath, 'utf-8', (err, data) =>{
    if(err){
        throw err
    }else{
        const metas = JSON.parse(data); 
        const meta = metas.find(meta => meta.nombre === metaEspecifica)
        if(meta){
            console.log("La meta ha sido encontrada")
        }else{
            metas.push({nombre: metaEspecifica}); 
            fs.writeFile(filePath, JSON.stringify(metas, null, 2), (err)=>{
                if(err){
                    throw err
                }else{
                    console.log("Su meta ha sido agregada exitosamente")
                }
            })
        
        }
    }
})