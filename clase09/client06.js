// DESAFÍO 6: Cliente con Control Inteligente de Reintentos y Máximo de Fallos        
// Objetivo: Crear un cliente TCP que intente reconectarse si la conexión se pierde, pero que abandone después de 5 intentos fallidos. 
// El cliente debe: 
// Intentar conectarse al servidor. 
// Si se desconecta, volver a intentar cada 2 segundos. 
// Llevar un contador de intentos fallidos. 
// Si llega a 5 intentos fallidos, terminar el proceso con un mensaje de error. 
// Manejar adecuadamente los eventos 'error', 'close' y 'data'. 
// PISTA: Usen un contador global de intentos y un setTimeout() para gestionar los reintentos. 
const net = require('net');

let intentos = 0;

function conectarCliente(){
    if(intentos >= 5){
        console.log('Se alcanzó el límite de intentos. \n Cerrando conexión...');
        return;
    }
    intentos++
    setTimeout(() => {
        const client = net.createConnection({port: 5000, host: 'localhost'}, () => {
            console.log('Conectado al servidor');
            client.write('¡Hola, servidor!');
    });
    }, 2000)

    client.on('data', (data) => {console.log('Mensaje del servidor: ', data.toString())});
    client.on('end', () => {console.log('Conexión finalizada por el servidor')});
    client.on('close', () => {console.log('El servidor cerró la conexión')});
    client.on('error', (err) => {
        console.log('Ha ocurrido un error inesperado: ', err.message)
        client.destroy()
    });
};

conectarCliente();

