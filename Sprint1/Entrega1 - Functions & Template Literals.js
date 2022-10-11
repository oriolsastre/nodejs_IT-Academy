/* Nivell 1 */
// Exercici 1
// Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.

function mostrarNom(nom){
    console.log(nom);
}
mostrarNom("Oriol");

/* Nivell 2 */
// Exercici 1
// Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

let nom = `Oriol`;
let cognoms = `Sastre Rienitz`;
console.log(`El nom complet d'aquest usuari és ${nom} ${cognoms}.`);

// Exercici 2
// Invoca una funció que retorni un valor des de dins d'una template literal.

function mostrarNom2(nom, cognoms){
    return nom + ' de nom i ' + cognoms + ' de primer i segon cognoms.';
}
console.log(`Aquest usuari es diu ${mostrarNom2('Oriol', 'Sastre Rienitz')}`); //No se'm demana mostrar-ho per consola, però per comprovar que funciona.

/* Nivell 3 */
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

var funcAnonAuto = (function(nom){console.log(nom);})("Oriol");