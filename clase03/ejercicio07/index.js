// Actividad 7: Control de tareas diarias 
// Consigna: Crea un programa para gestionar tus tareas diarias. El 
// programa debe permitirte: 

// Pistas: 
// • Usa un archivo JSON para guardar las tareas. 
// • El estado de cada tarea puede ser "pendiente" o "completada". 
// • Si el archivo no existe, comienza con un arreglo vacío.
const fs = require('fs');

const filePath = './toDoList.json';

const leerLista = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido)
};

const guardarTarea = (tarea) =>{
    fs.writeFileSync(filePath, JSON.stringify(tarea, null, 2))
};

// 1. Agregar una tarea diaria: Registrar una nueva tarea con su 
// descripción y estado. 
const agregarTarea = (tarea) =>{
    const lista = leerLista()
    lista.push({id: lista.length +1, toDo: tarea, estado: false})
    guardarTarea(lista)
};

// 2. Listar las tareas diarias: Mostrar todas las tareas con su estado. 
const listarTareas = () =>{
    const lista = leerLista();
    lista.forEach(t => {
        const estado = t.estado ? ' ✅' : '❎';
        console.log(`${t.id}. ${t.toDo} - ${estado}`)
    });
}

// 3. Marcar una tarea como completada: Cambiar el estado de una 
// tarea de "pendiente" a "completada". 
const cambiarEstado = (id) =>{
    const lista = leerLista();
    const toDoEncontrada = lista.find(t => t.id === id);
    if(toDoEncontrada){
    toDoEncontrada.estado = true
    }else{
        console.log('No se encontró una tarea con ese ID')
    }
    guardarTarea(lista)
};


//agregarTarea('Hacer CV');
cambiarEstado(4)
listarTareas();