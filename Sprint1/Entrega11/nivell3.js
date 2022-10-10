// Exercici 1
/* Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola.
Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades. */

var arrayDeFuncions = [];
for(let i=0;i<10;i++){
    arrayDeFuncions[i] = function() {for(let j=0;j<10;j++){console.log(j);}};
}

arrayDeFuncions.forEach(element => {
    element();
});

// Exercici 2
// Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

var funAnoAuto = function(nom){console.log(nom);}

funAnoAuto("Oriol");