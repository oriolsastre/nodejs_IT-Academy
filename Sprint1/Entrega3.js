/* Nivell 1 */
// Exercici 1
/* Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no. */

//let esMult3 = i => 

for(let i=1;i<11;i++){
    const calcMult3 = new Promise((resolve,reject) => {
        if(i%3===0){
            resolve(`${i} és múltiple de 3.`);
        }else{
            reject(`${i} NO és múltiple de 3.`)
        }
    })

    calcMult3
        .then( res => {console.log(res)})
        .catch( err => {console.log(err)})
}