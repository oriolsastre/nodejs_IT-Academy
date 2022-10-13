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

for(let i=1;i<11;i++){
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
        var trobat = false;
        var empleat = null;
        for(var index in employees){
            if(employees[index].id === id){
                trobat = true;
                empleat = employees[index];
            }
        }
        if(trobat){resolve(empleat);}
        else{reject(`No s'ha trobat cap empleat amb id ${id}.`);}
    })
}

//Provant que funciona amb un id existent.
let resultat = getEmployee(2);
resultat.then(res => {console.log(`L'employee amb id ${res.id} es diu ${res.name}`)}, err => {console.log(err)});

//Provant que no funciona amb un id inexisten.
resultat = getEmployee(5);
resultat.then(res => {console.log(`L'employee amb id ${res.id} es diu ${res.name}`)}, err => {console.log(err)});

// Exercici 2
// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.
let getSalary = employee => {
   for(var index in salaries){
        if(salaries[index].id == employee.id){
            return salaries[index].salary;
        }
   }
}
//Comprovant que funciona
console.log(getSalary(employees[1]));