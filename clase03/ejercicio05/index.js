// Actividad 5: Registro de contactos 
// Consigna: Crea un programa que permita registrar contactos con 
// nombre, teléfono y correo electrónico. El programa debe permitirte: 

// Pistas: 
// • Usa un archivo JSON para guardar los contactos. 
// • Si el archivo no existe, comienza con un arreglo vacío.
const fs = require('fs');
const filePath = './contactos.json';

const leerContactos = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
};

const guardarContacto = (contactos) =>{
    fs.writeFileSync(filePath, JSON.stringify(contactos, null, 2))
};

// 1. Agregar un contacto: Registrar un nuevo contacto. 
const agregarContacto = (nombre, telefono, email) =>{
    const agenda = leerContactos()
    agenda.push({id: agenda.length + 1, nombre: nombre, telefono: telefono, email: email});
    guardarContacto(agenda)
    console.log(`El contacto ${nombre} fue agregado `)
};

// 2. Listar los contactos: Mostrar todos los contactos registrados. 
const mostrarAgenda = () =>{
    const agenda = leerContactos();
    agenda.forEach(contact => {
        console.log(`${contact.id}. Nombre: ${contact.nombre} \n Número: ${contact.telefono} \n ${contact.email}`)
    });
}
// 3. Eliminar un contacto: Eliminar un contacto de la lista. 
const eliminarContacto = (idContacto) =>{
    const agenda = leerContactos();
    const contactoEncontrado = agenda.findIndex(c => c.id === idContacto);
    if(contactoEncontrado !== -1){
        agenda.splice(contactoEncontrado, 1)
    }else{
        console.log('Contacto no encontrado')
    }
    guardarContacto(agenda)
}


//agregarContacto('Amparo', 1198765432, 'amparo@gmail.com');
eliminarContacto(3)
mostrarAgenda();