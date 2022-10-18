fs = require('fs');
zlib = require('zlib');
stream = require('stream');

/* Nivell 1 */
// Exercici 1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

function escriuFrase(frase){
    fs.writeFile('./Sprint1/Entrega5_1.txt',frase,function(err){
        if(err){console.log(err)}
    });
}

escriuFrase('Prova sobreescrita');

//Exercici 2
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
function llegirArxiu(arxiu){
    fs.readFile(arxiu,'ascii', (err,data) => {
        if(err){console.log(err)}
        else{console.log(data)}
    });
}
//llegirArxiu('./Sprint1/Entrega5_1.txt');

// Exercici 3
// Crea una funció que comprimeixi el fitxer del nivell 1.
function comprimir(fitxer){
    const gzip = zlib.createGzip();
    const source = fs.createReadStream(fitxer);
    const destination = fs.createWriteStream(fitxer+'.gz');
    
    stream.pipeline(source, gzip, destination, (err) => {
      if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      }
    });
}
//comprimir('./Sprint1/Entrega5_1.txt')

/* Nivell 2 */
// Exercici 1
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.