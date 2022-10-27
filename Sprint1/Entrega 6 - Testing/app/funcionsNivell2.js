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
    }catch(err){throw err}
}

async function sumaDobles(a,b,c){
    try{
        const a2 = await dobleTard(a);
        const b2 = await dobleTard(b);
        const c2 = await dobleTard(c);
        return (a2+b2+c2)
    }catch(err){throw err;}
}
class Persona {
    constructor(nom){
        this.nom=nom;
    }
    dirNom() {
        console.log(this.nom);
    }
}

module.exports = {dobleTard, sumaDobles, Persona}