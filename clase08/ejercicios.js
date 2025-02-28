// Ejercicio 1: Conectar y enviar un mensaje al servidor 
// Crea un cliente TCP que: 
// 1. Se conecte a un servidor en localhost:5000. 
// 2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola, 
// servidor!". 
// 3. Escuche los datos recibidos y los muestre en consola. 
const net = require('net');

const client = net.createConnection({port: 5000, host: 'localhost'});

client.on('connect', () =>{
    client.write('Hola servidor!')
});

client.on('data', (data) =>{
    console.log('Datos recibidos: ', data.toString())
});

// Ejercicio 2: Implementar un timeout en la conexión 
// Modifica el cliente del Ejercicio 1 para que: 
// 1. Si después de 5 segundos no ha recibido una respuesta, cierre la 
// conexión. 
// 2. Muestre "Tiempo de espera agotado" en la consola antes de cerrar.  
client.setTimeout(5000, () => {
    console.log('Tiempo de espera agotado');
    client.end()
});

// Ejercicio 3: Pausar y reanudar la recepción de datos 
// Crea un cliente TCP que: 
// 1. Reciba mensajes continuamente del servidor. 
// 2. Al recibir el primer mensaje, pause la recepción durante 3 segundos. 
// 3. Luego de los 3 segundos, reanude la recepción y siga mostrando los mensajes. 

client.on('data', (data) =>{
    client.pause();
    client.setTimeout(() => {
        console.log('Reanudando recepción de datos');
        client.resume()})
}, 3000);

// Ejercicio 4: Manejo de errores en la conexión 
// Modifica el cliente para que: 
// 1. Si ocurre un error (como un servidor no disponible), lo detecte y lo 
// muestre con "Error: [mensaje]". 
// 2. Si la conexión se cierra inesperadamente, muestre "Conexión cerrada inesperadamente". 

client.on('error', (err) =>{
    console.log('Error: ', err.message);
});

client.on('close', () =>{
    console.log('Conexión cerrada inesperadamente');
});

// Ejercicio 5: Detectar cuando el servidor cierra la conexión 
// Crea un cliente que: 
// 1. Se conecte y envíe "¿Sigues ahí, servidor?". 
// 2. Cuando el servidor cierre la conexión, muestre "Servidor cerró la conexión". 

client.on('end', () => {
    console.log('Servidor cerró la conexión');
});

// Ejercicio 6: Cliente interactivo con la usuaria 
// Crea un cliente donde la usuaria pueda escribir mensajes en la consola y enviarlos al servidor. 
// • Después de cada mensaje, la usuaria puede escribir otro. 
// • Si escribe "salir", el cliente se desconecta. 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sendMessage(){
    rl.question('Ingrese su mensaje: ', (msg) =>{
        if(msg === 'salir'){
            rl.close()
            client.end()
        }else{
            client.write(msg)
            sendMessage()
        }
    })
};
client.on('connect', sendMessage);

// Ejercicio 7: Cliente que destruye el socket al fallar 
// Crea un cliente que: 
// 1. Se conecte al servidor. 
// 2. Si hay un error en la conexión, use client.destroy() y muestre "Conexión destruida". 

client.on('error', (err) => {
    console.log('Error en la conexion', err.message);
    console.log('Conexion destruida');
    client.destroy();
});

// Ejercicio 8: Cliente con unref/ref para control de procesos 
// Crea un cliente que: 
// 1. Use client.unref() para permitir que Node.js termine si no hay otras tareas. 
// 2. Luego, después de 5 segundos, use client.ref() para evitar que el proceso termine. 
// Pistas 
// • unref() hace que el socket no impida que Node.js termine. 
// • ref() lo vuelve a mantener activo. 
client.unref()
client.setTimeout(() => {
    client.ref()},5000)

// Ejercicio 9: Cliente que reconecta automáticamente 
// Crea un cliente que: 
// 1. Si la conexión falla, reintente conectarse cada 3 segundos hasta 
// que tenga éxito. 

function reconnect(){
    client.on('error', (err) =>{ 
        client.setTimeout(() =>{
            console.log('Reintentando conexión...');
            client = net.createConnection({host: 'localhost', port: 5000});
        },3000)
})};

// Ejercicio 10: Cliente que detecta pérdida de conexión 
// Crea un cliente que: 
// 1. Si deja de recibir datos durante 10 segundos, muestre "No hay datos del servidor" y cierre la conexión. 
// Pistas 
// • Usa setTimeout() que se reinicie con cada mensaje recibido. 
// • Si pasan 10 segundos sin mensajes, cierra con client.end().

let timeout;
client.on('data', (data) => {
    console.log('Servidor:', data.toString());
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('No hay datos del servidor. Cerrando conexión...');
        client.end();
    }, 10000);
});