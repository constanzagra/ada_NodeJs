// Actividad 9: Registro de eventos 
// Consigna: Crea un programa para registrar eventos. El programa debe 
// permitirte: 

// Pistas: 
// • Usa un archivo JSON para guardar los eventos. 
// • Si el archivo no existe, comienza con un arreglo vacío. 
// • Cada evento debe tener un ID único.
const fs = require('fs');
const filePath = './eventos.json';

const leerEventos = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido)
};

const guardarEventos = (evento) => {
    fs.writeFileSync(filePath, JSON.stringify(evento, null, 2))
};


// 1. Agregar un evento: Registrar un evento con nombre, fecha y 
// lugar. 
const agregarEvento = (evento, fecha, lugar) =>{
    const eventos = leerEventos();
    eventos.push({id: eventos.length + 1, evento: evento, fecha: fecha, ubicacion: lugar});
    guardarEventos(eventos)
};

// 2. Listar los eventos: Mostrar todos los eventos registrados. 
const listarEventos = () =>{
    const eventos = leerEventos();
    eventos.forEach(e => {
        console.log(`${e.id}. ${e.evento} - ${e.fecha} - ${e.ubicacion}`)
    });
};

// 3. Eliminar un evento: Eliminar un evento de la lista. 
const eliminarEvento = (idEvento) =>{
    const eventos = leerEventos();
    const eventoEncontrado = eventos.findIndex(e => e.id === idEvento);
    if(eventoEncontrado === -1){
        console.log('Evento no encontrado')
    }else{
        eventos.splice(eventoEncontrado, 1)
    }
    guardarEventos(eventos)
}


//agregarEvento('Evento networking', '12 de marzo', 'Wework');
eliminarEvento(2)
listarEventos()