//Exercici 1
// Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

let nom = `Oriol`;
let cognoms = `Sastre Rienitz`;

console.log(`El nom complet d'aquest usuari és ${nom} ${cognoms}.`);

// Exercici 2
// Invoca una funció que retorni un valor des de dins d'una template literal.

function mostrarNom(nom, cognoms){
    return nom + ' de nom i ' + cognoms + ' de primer i segon cognoms.';
}

console.log(`Aquest usuari es diu ${mostrarNom('Oriol', 'Sastre Rienitz')}`);