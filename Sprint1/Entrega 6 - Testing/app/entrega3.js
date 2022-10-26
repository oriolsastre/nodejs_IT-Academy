const mostraMissatge = (num,ite) => {console.log(`La suma iterativa dels digits de ${num} és ${ite}`)};
const sumaIterativa = (nombre, callback) => {
    if(isNaN(nombre) || !Number.isInteger(nombre)){throw new Error("La suma iterativa requereix un nombre enter.")}
    //Exemple: 159 => 1+5+9=15 => 1+5=6
    var iteratiu = nombre%9;
    if(iteratiu===0){iteratiu=9;}
    if(nombre===0){iteratiu=0;}
    callback(nombre,iteratiu);
}

//Nivell 2
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
        if(!Number.isInteger(id)){reject(new Error(`L'ID ha de ser un número enter.`))}
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

module.exports = {mostraMissatge, sumaIterativa, employees, salaries, getEmployee, getSalary}