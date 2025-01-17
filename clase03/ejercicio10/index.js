// Actividad 10: Gestión de compras 
// Consigna: Crea un programa que registre las compras realizadas. El 
// programa debe permitirte: 

// Pistas: 
// • Usa un archivo JSON para guardar las compras. 
// • Si el archivo no existe, comienza con un arreglo vacío. 
// • Cada compra debe tener un ID único.

const fs = require('fs');
const filePath = './compras.json';

const leerCompras = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
};

const guardarCompra = (compra) =>{
    fs.writeFileSync(filePath, JSON.stringify(compra, null, 2))
};

// 1. Agregar una compra: Registrar una compra con su nombre y 
// precio.
const agregarCompra = (nombre, precio) =>{
    const compras = leerCompras()
    compras.push({id: compras.length + 1, item: nombre, precio: precio})
    guardarCompra(compras)
};

// 2. Listar las compras: Mostrar todas las compras registradas. 
const listarCompras = () =>{
    const compras = leerCompras();
    compras.forEach(c => {
        console.log(`${c.id}. ${c.item} - $${c.precio}`)
    });
}

// 3. Eliminar una compra: Eliminar una compra de la lista. 
const eliminarCompra = (idCompra) =>{
    const compras = leerCompras();
    const compraEncontrada = compras.findIndex(c => c.id === idCompra);
    if(compraEncontrada === -1){
        console.log('Item no encontrado')
    }else{
        compras.splice(compraEncontrada, 1)
    }
    guardarCompra(compras)
}

//agregarCompra('biblioteca', 720);
eliminarCompra(5)
listarCompras()