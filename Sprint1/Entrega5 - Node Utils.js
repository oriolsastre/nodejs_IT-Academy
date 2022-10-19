fs = require('fs');
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const { exec } = require('child_process');

/* Nivell 1 */
// Exercici 1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

function escriuFrase(frase){
    fs.writeFile('./Sprint1/Entrega5_1.txt',frase,function(err){
        if(err){console.log(err)}
    });
}
//escriuFrase('Prova sobreescrita');

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
    const gzip = createGzip();
    const source = fs.createReadStream(fitxer);
    const destination = fs.createWriteStream(fitxer+'.gz');
    
    pipeline(source, gzip, destination, (err) => {
      if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      }
    });
}
//comprimir('./Sprint1/Entrega5_1.txt');

/* Nivell 2 */
// Exercici 1
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
function printRecursiu(missatge,vegades){
    setTimeout(()=>{
        console.log(missatge);
        if(vegades>1){
            printRecursiu(missatge,(vegades-1));
        }
    },1000);
}
//printRecursiu('Hola',3);

// Exercici 2
// Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.
function llistarDirectoriUsuari(nomUsuari){
    exec(`dir C:\\Users\\${nomUsuari}`,(err,stdout,stderr)=>{
        if(err){console.log(stderr);}
        else{console.log(stdout);}
    })
}
//llistarDirectoriUsuari('formacio');

/* Nivell 3 */
// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
function file2HexAndb64(nomFitxer){
    const partsNom = nomFitxer.split(".");
    fs.readFile(`./Sprint1/${nomFitxer}`,(err,data) => {
        if(err){console.log(err);}
        else{
            const dataHex = data.toString('hex');
            const dataB64 = data.toString('base64');
            const nouNomHex = partsNom[0] + 'Hex.txt';
            const nouNomb64 = partsNom[0] + 'b64.txt';
            fs.writeFile(nouNomHex,dataHex,function(err){if(err){console.log(err)}});
            fs.writeFile(nouNomb64,dataB64,function(err){if(err){console.log(err)}});
        }
    })
}

//file2HexAndb64('Entrega5_1.txt');
//llegirArxiu('Entrega5_1Hex.txt');
fs.readFile('Entrega5_1b64.txt', (err,data) => {
    if(err){console.log(err)}
    else{
        const llegir = Buffer.from(data,'base64').toString('ascii');
        console.log(llegir)
    }
});
// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.
// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.