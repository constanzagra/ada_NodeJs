// Actividad 8: Seguimiento de proyectos 
// Consigna: Crea un programa para gestionar proyectos. El programa debe 
// permitirte: 

// Pistas: 
// • Usa un archivo JSON para guardar los proyectos. 
// • Si el archivo no existe, comienza con un arreglo vacío. 
// • Cada proyecto debe tener un ID único. 
const fs = require('fs');

const filePath = './proyectos.json';

const leerProyectos = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido)
};

const guardarProyecto = (proyecto) =>{
    fs.writeFileSync(filePath, JSON.stringify(proyecto, null, 2))
};

// 1. Agregar un proyecto: Registrar un proyecto con su nombre y 
// estado (pendiente o en progreso). 
const agregarProyecto = (nombre, estado) =>{
    const proyectos = leerProyectos();
    proyectos.push({id: proyectos.length + 1,
                    proyecto: nombre,
                    estado: estado
    })
    guardarProyecto(proyectos)
};

// 2. Listar los proyectos: Mostrar todos los proyectos registrados. 
const listarProyectos = () =>{
    const proyectos = leerProyectos();
    proyectos.forEach(p => {
        console.log(`${p.id}. ${p.proyecto} - ${p.estado}`)
    });
}

// 3. Actualizar el estado de un proyecto: Cambiar el estado de un 
// proyecto a "finalizado" o "en progreso". 
const cambiarEstado = (idProyecto, nuevoEstado) =>{
    const proyectos = leerProyectos();
    const proyectoEncontrado = proyectos.find(p => p.id === idProyecto);
    if(!proyectoEncontrado){
        console.log('No se encontró un proyecto con el ID ingresado')
    }else{
        proyectoEncontrado.estado = nuevoEstado
    }
    guardarProyecto(proyectos)
}

//agregarProyecto('Estudiar Java con springboot', 'pendiente');
cambiarEstado(1, 'en progreso')
listarProyectos();