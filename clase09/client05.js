// DESAFÍO 5: Cliente con Eventos y Control de Referencias      
// Objetivo: Aplicar ref() y unref() para controlar la terminación del proceso de Node.js. 
// El cliente debe: 
// Conectarse y enviar un mensaje inicial. 
// Escuchar los eventos 'data', 'end', 'close' y 'error'. 
// Llamar a client.unref() a los 10 segundos para permitir que el proceso termine. 
// A los 15 segundos, llamar a client.ref() para que el proceso se mantenga activo. 
// Cerrar la conexión a los 20 segundos.
const net = require('net');

const client = net.createConnection({port: 5000, host: 'localhost'}, () => {
    console.log('Conectado al servidor');
    client.write('¡Hola, servidor!');
});

client.on('data', (data) => {console.log('Mensaje del servidor: ', data.toString())});
client.on('end', () => {console.log('Conexión finalizada por el servidor')});
client.on('close', () => {console.log('El servidor cerró la conexión')});
client.on('error', (err) => {console.log('Ha ocurrido un error inesperado: ', err.message)});

client.setTimeout(() =>{
    client.unref()
}, 10000);

client.setTimeout(() =>{
    client.ref()
}, 15000);

client.setTimeout(() => {
    console.log('Cerrando conexión por falta de respuesta del servidor...');
    client.end()
}, 20000);