/* Nivell 1 */
// Exercici 1
// Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

console.log( ( (a,b) => a+b )(1,2) );

/* Nivell 2 */
// Exercici 1
// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

ferMoble = material => {
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
class Moble{
    constructor(){}
    faig(){}
}
class Lampada extends Moble{
    constructor(potes){
        super();
        this.potes=potes;
        this.nom = "Lampada";
    }
    faig(){
        console.log(`Soc una ${this.nom}, tinc ${this.potes} pota i faig llum.`);
    }
}

class Cadira extends Moble{
    constructor(potes){
        super();
        this.potes=potes;
        this.nom = "Cadira";
    }
    faig(){
        console.log(`Soc una ${this.nom}, tinc ${this.potes} potes i la gent hi pot seure.`);
    }
}

class Taula extends Moble{
    constructor(potes){
        super();
        this.potes=potes;
        this.nom = "Taula";
    }
    faig(){
        console.log(`Soc una ${this.nom}, tinc ${this.potes} potes i la gent hi posa objectes.`);
    }
}


function crearMoble(numPotes) {
    if(numPotes<=0){console.log("Un moble necessita un nombre de potes positiu superior a 0");}
    else if(numPotes==1){
        return new Lampada(numPotes);
    }
    else if(numPotes>1 && numPotes<4){
        return new Cadira(numPotes);
    }else{
        return new Taula(numPotes);
    }
}

for(let i=1;i<5;i++){
    var moble = crearMoble(i);
    moble.faig();
}