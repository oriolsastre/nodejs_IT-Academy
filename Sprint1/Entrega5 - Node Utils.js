fs = require('fs');
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const { exec } = require('child_process');
cy = require('crypto');

/* Nivell 1 */
// Exercici 1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

function escriuFrase(frase){
    fs.writeFile('Entrega5_1.txt',frase,function(err){
        if(err){console.log(err)}
    });
}
//escriuFrase('Text de prova que ha de ser codificat, encriptat, desencriptat i descodificat per als exercicis del Nivell 3.');

//Exercici 2
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
function llegirArxiu(arxiu){
    fs.readFile(arxiu,'ascii', (err,data) => {
        if(err){console.log(err)}
        else{console.log(data)}
    });
}
//llegirArxiu('Entrega5_1.txt');

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
//comprimir('Entrega5_1.txt');

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
    fs.readFile(nomFitxer,(err,data) => {
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

// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.
function encriptarFitxer(nomFitxer,contrasenya){
    const algoritme = 'aes-192-cbc';
    cy.scrypt(contrasenya,'salobre',24,(err,clau)=>{
        if(err){throw err;}
        cy.randomFill(new Uint8Array(16), (err,iv)=>{
            if(err){throw err;}
            const xifratge = cy.createCipheriv(algoritme,clau,'aaaaaaaaaaaaaaaa');

            const partsNom = nomFitxer.split(".");
            const input = fs.createReadStream(nomFitxer);
            const output = fs.createWriteStream(`${partsNom[0]}.enc`);
            pipeline(input, xifratge, output, (err) => {
                if (err) throw err;
                fs.unlink(nomFitxer,(err)=>{
                    if(err) throw err;
                })
            });
        })
    })
}
//encriptarFitxer('Entrega5_1b64.txt','1234');
//encriptarFitxer('Entrega5_1Hex.txt','1234');

// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
function decipherDecode(nomFitxer, contrasenya){
    const algoritme = 'aes-192-cbc';
    const clau = cy.scryptSync(contrasenya, 'salobre', 24);
    const iv = Buffer.alloc(16, 0);
    const decipher = cy.createDecipheriv(algoritme, clau, 'aaaaaaaaaaaaaaaa');
    
    const partsNom = nomFitxer.split(".");
    const input = fs.createReadStream(nomFitxer);
    const output = fs.createWriteStream(partsNom[0]+'.txt');
    input.pipe(decipher).pipe(output);
}

decipherDecode('Entrega5_1b64.enc','1234');
decipherDecode('Entrega5_1Hex.enc','1234');