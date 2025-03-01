// DESAFÍO 1: Cliente con Reconexión Automática     
// Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la 
// conexión se pierde, debe intentarlo nuevamente cada 3 segundos. 
// El cliente debe: 
// Conectarse al servidor en el puerto 5000. 
// Enviar un mensaje inicial: "¡Hola, servidor!". 
//    Escuchar el evento 'close' y volver a conectarse tras 3 segundos. 
//    Escuchar y manejar 'error', mostrando el mensaje en consola. 
const net = require('net');

const client = net.createConnection({port: 5000, host: 'localhost'}, () => {
    console.log('Conectado al servidor');
    client.write('¡Hola, servidor!');
});

client.on('data', (data) => {
    console.log(data.toString());
    client.write(data.toString());
});

client.on('close', () => {
    console.log('Reintentando conexión...');
    setTimeout(() => {
        client = net.createConnection({port: 5000, host: 'localhost'}, () => {
            console.log('Reconectando con el servidor');
            client.write('Reconectando, hola servidor!');
        })
        },3000)
});

client.on('error', (err) => {
    console.error('Error:', err.message);
});

