fs = require('fs');

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