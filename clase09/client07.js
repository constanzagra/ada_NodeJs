// DESAFÍO 7: Cliente con Envío de Comandos, Validación y Auto Desconexión               
// Objetivo: Implementar un cliente TCP que permita al usuario ingresar comandos desde la terminal, los valide 
// antes de enviarlos y cierre la conexión si se recibe una respuesta específica del servidor. 
// El cliente debe: 
// Conectarse al servidor en el puerto 5000. 
// Leer la entrada del usuario desde la terminal con readline. 
// Solo permitir comandos que empiecen con CMD_ (ejemplo: CMD_HOLA, CMD_ADIOS). 
// Enviar los comandos al servidor solo si son válidos. 
// Escuchar respuestas del servidor. 
// Si el servidor responde "EXIT", cerrar la conexión y terminar el programa. 
// PISTA: Usen readline para capturar la entrada del usuario y RegExp para validar los comandos.
const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.createConnection({port: 5000, host: 'localhost'}, () => {
    console.log('Conectado al servidor');
});

rl.on('line', (entrada) => {
    if (/^CMD_\w+$/.test(entrada)) {
        client.write(entrada);
    } else {
        console.log('Comando inválido. Debe comenzar con CMD_');
    }
});

client.on('data', (data) => {
    const mensaje = data.toString().trim();
    if(mensaje === 'EXIT'){
        console.log('El servidor cerró la conexión.');
        client.end();
        rl.close();
    }
});

client.on('error', (err) => {
    console.error(`⚠️ Error en la conexión: ${err.message}`);
    rl.close();
});