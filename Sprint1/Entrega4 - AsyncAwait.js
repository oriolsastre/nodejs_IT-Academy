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

/* Nivell 1 */
// Exercici 1
/* Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari,
usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior. */
async function empleatSalari(id){
    try{
        const empleat = await getEmployee(id);
        const salari = await getSalary(empleat);
        console.log(`L'employee amb id ${empleat.id} es diu ${empleat.name} i té un salari de ${salari} unitats monetàries.`);
    } catch(err) {
        console.log(err.message);
    }
}
//comprovació
//empleatSalari(2);

// Exercici 2
// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
async function cridaFuncio(){
    try{
        const empleat = await getEmployee(2);
        setTimeout(()=>{
            console.log(`Dos segons més tard et dic que aquest empleat es diu ${empleat.name}`);
        },2000)
    }catch(err){console.log(err.message);}
}
//comprovacio
//cridaFuncio();

/* Nivell 2 */
// Exercici 1
// Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
// Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.
async function dobleTard(a){
    let doble = new Promise((resolve,reject) =>{
        if(typeof a !== 'number'){reject(Error('Aquesta funció només accepta números.'));}
        setTimeout(()=>{
            resolve(2*a);
        },2000);
    });
    try{
        const resultat = await doble;
        return resultat;
    }catch(err){console.log(err.message);}
}

async function sumaDobles(a,b,c){
    try{
        const a2 = await dobleTard(a);
        const b2 = await dobleTard(b);
        const c2 = await dobleTard(c);
        return (a2+b2+c2)
    }catch{(err)=>console.log(err.message);}
}

//dobleTard(2).then(val => console.log(val));
//sumaDobles(1,2,3).then(val => console.log(val));

/* Nivell 3 */
// Exercici 1
// Força i captura tants errors com puguis dels nivells 1 i 2

// Això que havia fet al Nivell 3 de l'Entrega 3 que correspondria al nivell 1 d'aquesta entrega.
getEmployee(7).catch((err)=>{console.log(err.message)});
getEmployee('a').catch((err)=>{console.log(err.message)});;
//o també
empleatSalari(7);

//Pel Nivell 2
dobleTard('a');
sumaDobles(1,2);