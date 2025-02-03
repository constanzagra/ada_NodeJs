// Ejercicio 6: Servidor de Comandos 
// Consigna: 
// Crea un servidor TCP que permita a los clientes enviar comandos 
// simples. Dependiendo del comando recibido, el servidor debe realizar 
// una acción específica: 
// • Si el cliente envía "fecha", el servidor debe responder con la fecha y 
// hora actual. 
// • Si el cliente envía "ip", el servidor debe responder con la dirección 
// IP del cliente. 
// Si el cliente envía "salir", el servidor debe cerrar la conexión. 
// • Para cualquier otro comando, el servidor debe responder 
// "Comando no reconocido". 
// Requisitos: 
// • Usa el evento data para recibir y procesar los comandos. 
// • Usa el método socket.write() para enviar respuestas. 
// • Usa el método socket.end() para cerrar la conexión cuando el 
// cliente envíe "salir".

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado al servidor')

    //Escucho la info que me envia el cliente
    socket.on('data', (data) => {
        const dataToString = data.toString().trim().toLowerCase(); //Paso la data a string y prevengo errores de salto de linea, espacios o mayúsculas

        if(dataToString === "fecha"){
            const fechaActual = new Date().toLocaleString(); //Guardo la fecha actual
            socket.write(`Hoy es ${fechaActual} \n`);
        }
        else if(dataToString === "ip"){
            const clienteIP = socket.remoteAddress; //Guardo el ip del cliente
            socket.write(`IP del cliente ${clienteIP} \n`);
        }
        else if(dataToString === "salir"){
            socket.write("Hasta luego! \n")
            socket.end()
        }
        else{
            socket.write('Comando no reconocido')
        }
    })
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});