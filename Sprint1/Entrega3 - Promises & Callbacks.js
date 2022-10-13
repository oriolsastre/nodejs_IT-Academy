/* Nivell 1 */
// Exercici 1
/* Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no. */

let esMult3 = i => {
    return new Promise( (resolve,reject) => {
        if(i%3===0){
            resolve(`${i} és múltiple de 3.`);
        }else{
            reject(`${i} NO és múltiple de 3.`);
        }
    })

}
//Comprovant amb varis valors per veure els missatges de resolved i reject.
for(let i=6;i<10;i++){
    const comprova3 = esMult3(i);
    comprova3.then(res => {console.log(res)}, err => {console.log(err)})
}

// Exercici 2
// Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.
let mostraMissatge = (num,ite) => {console.log(`La suma iterativa dels digits de ${num} és ${ite}`)};
const sumaIterativa = (nombre, callback) => {
    //Exemple: 159 => 1+5+9=15 => 1+5=6
    const iteratiu = nombre%9;
    callback(nombre,iteratiu);
}
sumaIterativa(159,mostraMissatge);


/* Nivell 2 */
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

// Exercici 1
// Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.
let getEmployee = id => {
    return new Promise ((resolve, reject) => {
        if(typeof id !== 'number'){reject(new Error(`L'ID ha de ser un número.`))}
        var trobat = false;
        var empleat = null;
        for(var index in employees){
            if(employees[index].id === id){
                trobat = true;
                empleat = employees[index];
            }
        }
        if(trobat){resolve(empleat);}
        else{reject(new Error(`No s'ha trobat cap empleat amb id ${id}.`))}
    })
}

// Exercici 2
// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.
let getSalary = employee => {
    return new Promise((resolve,reject) => {
        //comprovar que l'objecte employee té una id
        if(typeof employee.id !== 'number'){reject(new Error(`Objecte d'empleat invàlid o sense id vàlida!`))}
        
        for(var index in salaries){
            if(salaries[index].id == employee.id){
                resolve(salaries[index].salary);
            }
        }
        reject(new Error("No s'ha trobat aquest empleat."))
    })
    
}

// Exercici 3
// Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

getEmployee(3)
    .then(res => {
        infoEmpleat = res;
        return getSalary(res);
    })
    .then(res => {
        console.log(`L'employee amb id ${infoEmpleat.id} es diu ${infoEmpleat.name} i té un salari de ${res} unitats monetàries.`);
    })
    .catch(err => {console.log(err.message);})  //Nivell 3, exercici 1

/* Nivell 3 */
// Exercici 1
// Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.
// Per comprovar que els errors es mostren, o bé cridar getEmployee(7), o getEmployee('a'), o esborrar un objecte de l'array tant employees com salaries i provar d'accedir-lo 