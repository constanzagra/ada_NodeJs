// Actividad 2: Seguimiento de series de televisión
// Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa
// que permita:
// 1. Registrar una serie: Se debe registrar una serie con su nombre y
// la cantidad de temporadas.
// 2. Listar las series: Muestra todas las series registradas.
// 3. Actualizar las temporadas de una serie: Permite actualizar la
// cantidad de temporadas de una serie.
// Pistas:
// • Usa un archivo JSON para almacenar la información de las series.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • ¿Qué es fs.existsSync()?
// • El método fs.existsSync() es parte del módulo fs (file system) en
// Node.js. Este método se usa para comprobar si un archivo o
// directorio existe en el sistema de archivos de manera sincrónica, lo 
// que significa que el código se ejecuta y espera a que la operación se
// complete antes de continuar con el siguiente paso.
// • Sintaxis: fs.existsSync(path);

const fs = require('fs');
const filePath = './series.json'

const leerSeries = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
};

const guardarSeries = (series) =>{
    fs.writeFileSync(filePath, JSON.stringify(series, null, 2))
};

const registrarSerie = (nombreSerie, temporadas) =>{
    const series = leerSeries()
    series.push({id: series.length + 1, nombre: nombreSerie, Temporadas: temporadas})
    guardarSeries(series)
    console.log(`Serie agregada: ${nombreSerie}`)
};

const listarSeries = () =>{
    const series = leerSeries()
    console.log(series)
};

const actualizarTemporadas = (idSerie, nuevasTemporadas) =>{
    const series = leerSeries()
    const serieEncontrada = series.find((serie) => serie.id === idSerie);
    if(serieEncontrada){
        serieEncontrada.temporadas = parseInt(nuevasTemporadas);
        guardarSeries(series);
    }else{
        console.log('Serie no encontrada')
    }
};

//registrarSerie("The office", 6)
actualizarTemporadas(3, 9)
listarSeries()
