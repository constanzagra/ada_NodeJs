// Actividad 4: Control de inventario 
// Consigna: Crea un programa para llevar el control de un inventario. El 
// programa debe permitirte: 

// Pistas: 
// • Usa un archivo JSON para guardar los productos. 
// • Si el archivo no existe, comienza con un arreglo vacío. 
// • Cada producto debe tener un ID único que se pueda utilizar para 
// actualizar su cantidad.
const fs = require('fs');
const filePath = './inventario.json';

const leerInventario = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
};

const guardarProducto = (inventario) =>{
    fs.writeFileSync(filePath, JSON.stringify(inventario, null, 2))
}

// 1. Agregar un producto: Registrar un producto con su nombre y 
// cantidad disponible. 
const agregarProducto = (nombreProducto, cantidad) =>{
    const inventario = leerInventario();
    inventario.push({id: inventario.length + 1, producto: nombreProducto, unidades: cantidad});
    guardarProducto(inventario)
    console.log('Producto agregado:', nombreProducto)
}; 

// 2. Listar los productos: Mostrar todos los productos registrados. 
const listarInventario = () =>{
    const inventario = leerInventario();
    inventario.forEach(prod => {
        console.log(`${prod.id}. ${prod.producto} - ${prod.unidades} unidades`)
    });
}

// 3. Actualizar la cantidad de un producto: Modificar la cantidad de 
// un producto en el inventario. 
const actualizarInventario = (idProducto, nuevaCantidad) =>{
    const inventario = leerInventario();
    const productoEncontrado = inventario.find((p) => p.id === idProducto);
    if(!productoEncontrado){
        console.log('No se ha encontrado un producto con el id:', idProducto)
    }else{
        productoEncontrado.unidades = parseInt(nuevaCantidad)
    }
    guardarProducto(inventario)
}


//agregarProducto('tote bags', 20);
actualizarInventario(4, 18)
listarInventario()