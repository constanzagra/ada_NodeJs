// Ejercicio 7: Servidor de Chat Grupal 
// Consigna: 
// Crea un servidor TCP que permita a múltiples clientes conectarse y enviar 
// mensajes. Cada mensaje enviado por un cliente debe ser retransmitido a 
// todos los demás clientes conectados. El servidor debe notificar cuando 
// un cliente se conecta o desconecta. 
// Requisitos: 
// • Usa un array para almacenar las conexiones de los clientes. 
// • Usa el evento data para recibir mensajes y retransmitirlos a todos 
// los clientes. 
// • Usa el evento end para eliminar a un cliente del array cuando se 
// desconecta. 
// • Notifica a los demás clientes cuando alguien se conecta o 
// desconecta.
const net = require('net');

const clientes = [];

const server = net.createServer((socket) =>{
    //Envío la nueva conección al array de clientes
    clientes.push(socket);
    console.log('Se ha conectado un nuevo cliente')

    

})