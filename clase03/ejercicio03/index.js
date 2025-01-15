// Actividad 3: Registro de tareas pendientes
// Consigna: Crea un programa para gestionar tus tareas pendientes. El
// programa debe permitirte:

// Pistas:
// • Usa un archivo JSON para guardar las tareas.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Eliminar una tarea se puede hacer por su ID.
const fs = require('fs');
const filePath = './tareas.json'

const leerTareas = () =>{
    if(!fs.existsSync(filePath)){ 
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
};

const guardarTarea = (tareas) =>{
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2))
};

// 1. Agregar una tarea: Registrar una tarea pendiente con su
// descripción.
const agregarTarea = (descripcionTarea) =>{
    const tareas = leerTareas()
    tareas.push({id: tareas.length +1, descripcionTarea, completada: false})
    guardarTarea(tareas)
    console.log(`Tarea agregada: ${descripcionTarea}`)
};

// 2. Listar las tareas: Mostrar todas las tareas registradas.
const listarTareas = () =>{
    const tareas = leerTareas();
    tareas.forEach(t => {
        const estado = tareas.completada ? ' ✅' : '❎';
        console.log(`${t.id}. ${t.descripcionTarea} - ${estado}`)
    });
}

// 3. Eliminar una tarea: Eliminar una tarea de la lista.
const eliminarTarea = (id) =>{
    const tareas = leerTareas()
    const tareaEncontrada = tareas.findIndex(t => t.id === id);
    if(tareaEncontrada !== -1){
        tareas.splice(tareaEncontrada, 1)
    }else{
        console.log('Tarea no encontrada')
    }
    guardarTarea(tareas)
};

//agregarTarea('Comprar en el supermercado')
eliminarTarea(4)
listarTareas()