// DESAFÍO 4: Cliente con Mensajes Temporizados y Cierre Programado 
//Objetivo: Enviar mensajes cada 5 segundos y cerrar la conexión tras 20 segundos. 
//   El cliente debe: 
//    Conectarse y enviar un mensaje inicial. 
//    Enviar un mensaje "Mensaje automático" cada 5 segundos. 
//    Escuchar el evento 'data' y mostrar los datos recibidos. 
//    Cerrar la conexión con client.end() tras 20 segundos. 
const net = require('net');

const client = net.createConnection({port: 5000, host: 'localhost'}, () => {
    console.log('Conectado al servidor');
    client.write('¡Hola, servidor!');
});

client.setTimeout(() => {
    client.write('Mensaje automático')
}, 5000);

client.on('data', (data) =>{
    console.log('Mensaje del servidor: ', data.toString());
});

client.setTimeout(() =>{
    console.log('Cerrando conexión por falta de respuesta del servidor...');
    client.end
}, 20000);