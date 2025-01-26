const readline = require('readline');

//cargamos las ve desde el archivo .env usando dotenv
require('dotenv').config()

//establecemos un saludo predeterminado usando una variable de entorno (VE)
//si no se define en el archivo .env, usamos este valor por defecto
const defaultGreeting = process.env.GREETING || 'Hola ';

//Procesamos los argumentos de la linea de comando (process.argv)
//capturamos el primer argumento despues del nombre del archivo como el nombre de usuario
//si no se proporciona un arg usamos invitado como valor predeterminado
const args = process.argv.slice(2);
const userName = args[0] || 'Chicas de back'

//mostramos el saludo personalizado y el nombre del usuasrio
console.log(`${defaultGreeting}, ${userName}`);

//mostrar info sobre el entorno de ejecución
console.log('Información sobre el entorno de ejecución: ');
//directorio actual
console.log(`Directorio actual: ${process.cwd()}`);
//plataforma
console.log(`Plataforma: ${process.platform}`);

//creamos la interfaz para interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//usamos el metodo rl question para mostrar la preg al usuario
rl.question('Cuántos años tienes?', (age) =>{
    console.log(`Wow, ${age} es una gran edad!`);
    rl.close()
});

//manejamos el evnto close
rl.on('close', () =>{
    console.log('Gracias por usar este programa. Adios!');
    process.exit(0)
})