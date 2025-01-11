// Ejercicio 4: Contando vocales 🅰️🅾️ 
// Crea una función que reciba una cadena de texto y devuelva cuántas 
// vocales contiene. 
// Consigna: 
// • Usa un bucle for y condicionales. 
// • Considera vocales mayúsculas y minúsculas (a, e, i, o, u).
let texto = 'Hola mundo';
function contarVocales(texto){
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        let vocal = texto[i]
        if(vocal == 'a' || vocal == 'e' || vocal == 'i' || vocal == 'o' || vocal == 'u'){
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales(texto));