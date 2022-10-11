/* Nivell 1 */
// Exercici 1
// Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

console.log( ( (a,b) => a+b )(1,2) );

/* Nivell 2 */
// Exercici 1
// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

let ferMoble = (material) => {
    var moble = {material: material}
    return moble;
}

var cadira = ferMoble("fusta");
console.log(cadira.material); //Mostrant en consola per comprovar que funciona.

// Exercici 2
/* Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'.
Invoca el mètode dirNom des de fora de la classe. */

class Persona {
    constructor(nom){
        this.nom=nom;
    }
    dirNom() {
        console.log(this.nom);
    }
}

var jo = new Persona("Oriol");
jo.dirNom();

/* Nivell 3 */
// Exercici 1
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.



function crearObjecte(tipus) {
    
}