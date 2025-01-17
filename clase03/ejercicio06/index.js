// Actividad 6: Gestión de un diario personal 
// Consigna: Crea un programa que te permita gestionar un diario 
// personal. El programa debe permitirte: 

// • Usa un archivo JSON para guardar las entradas del diario. 
// • Cada entrada tendrá una fecha y un texto. 
// • Si el archivo no existe, comienza con un arreglo vacío. 
const fs = require('fs');
const filePath = './diario.json';

const leerDiario = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
};

const guardarEntrada = (entrada) =>{
    fs.writeFileSync(filePath, JSON.stringify(entrada, null, 2))
};

// 1. Agregar una entrada al diario: Registrar una nueva entrada con 
// la fecha y el texto. 
const agregarEntrada = (fecha, texto) =>{
    const diario = leerDiario();
    diario.push({id: diario.length + 1, fecha: fecha, entrada: texto});
    guardarEntrada(diario);
};

// 2. Listar las entradas: Mostrar todas las entradas registradas. 
const listarEntrads = () =>{
    const diario = leerDiario();
    diario.forEach(e => {
        console.log(`${e.id}. ${e.fecha} - ${e.entrada}`)
    });
};

// 3. Eliminar una entrada: Eliminar una entrada específica por su ID. 
// Pistas: 
const eliminarEntrada = (idEntrada) =>{
    const diario = leerDiario();
    const entradaEncontrada = diario.findIndex(e => e.id === idEntrada);
    if(entradaEncontrada === -1){
        console.log('ID no encontrado. Ingrese un ID válido');
    }else{
        diario.splice(entradaEncontrada, 1)
        guardarEntrada(diario)
    }
};


//agregarEntrada('22 de enero', 'Me quiero ir a la playa')
eliminarEntrada(3)
listarEntrads()