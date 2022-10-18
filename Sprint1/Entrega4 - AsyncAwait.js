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
// Exercici 2


/* Nivell 2 */
// Exercici 1
// Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
/* setTimeout(()=>{},2000) a*/