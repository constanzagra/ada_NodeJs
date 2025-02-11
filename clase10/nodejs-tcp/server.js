// Parte 1: Crear el Servidor TCP 
// 1. Descripción: Crea un servidor TCP en Node.js que escuche en el 
// puerto 5000. El servidor debe manejar múltiples conexiones de 
// clientes y mostrar los mensajes recibidos en la consola. Además, el 
// servidor debe responder a cada mensaje con una confirmación que 
// diga "Mensaje recibido".
// 2. Requisitos: 
// o El servidor debe escuchar en el puerto 5000. 
// o Debe manejar el evento connection para aceptar nuevas 
// conexiones de clientes. 
// o Debe manejar el evento data para recibir y mostrar mensajes 
// de los clientes. 
// o Debe manejar el evento close para saber cuándo un cliente 
// se desconecta. 
// o Debe manejar el evento error para mostrar cualquier error 
// que ocurra. 
// o El servidor debe responder a los mensajes de los clientes con 
// "Mensaje recibido". 

// Importo el modulo net
const net = require('net');

//Creo el servidor
const server = net.createServer();

//Manejo el evento 'connection'
server.on('connection', (socket) =>{
    //Muestro un mensaje de que el cliente está conectado
    console.log('Nuevo cliente conectado:', socket.remoteAddress + ":" + socket.remotePort);
    //Manejo el evento data
    socket.on('data', (data) =>{
        //Muestro en consola el mensaje recibido del cliente
        console.log('Cliente 01: ', socket.remoteAddress + socket.remotePort + " " + data.toString());
        //Le respondo al cliente
        socket.write('Mensaje recibido');
    })
    //Manejo el evento close
    socket.on('close', () =>{
        console.log('Comunicación finalizada');
    });

    //Manejo y muestro el error
    socket.on('error', (err) =>{
        console.log('Error: ' + err.message);
    })
});

//Pongo el servidor a escuchar
server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto: ' + server.address().port);
});