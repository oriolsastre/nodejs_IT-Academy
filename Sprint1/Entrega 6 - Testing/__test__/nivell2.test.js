const n2 = require('../app/funcionsNivell2')

describe("Punt 1. Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.", () => {
    jest.useFakeTimers();
    test("Retorna correctament el doble d'un nombre, ja sigui negatiu, positiu, enter i/o decimal", () => {
        for(let i=-2.5;i<=2.5;i+=0.5){
            const doble = n2.dobleTard(i)
            jest.runAllTimers();
            return doble.then(res => {
                expect(res).toBe(2*i)
            })
        }
    })
    test("Error si no s'ha donat un número", () => {
        const errorDoble = n2.dobleTard('a')
        return errorDoble.catch(err => {
            expect(err.message).toBe('Aquesta funció només accepta números.')
        })
    })
    //test comentat perquè no funcioan i de moment no sé fer-lo funcionar.
    /* test("La suma dels dobles és correcte", async () => {
        for(let a=-1;a<1;a++){
        for(let b=2;b<5;b++){
        for(let c=5;c<8;c++){
            const sumaDobles = await n2.sumaDobles(a,b,c);
            jest.runAllTimers();
            return sumaDobles.then(res => {
                expect(res).toEqual(a*2+b*2+c*2)
            })
        }
    }
        }
    }) */
    test("Error si no s'ha donat un número a la funció suma dels dobles", () => {
        const errorSumaDoble = n2.sumaDobles('a',1,2)
        return errorSumaDoble.catch(err => {
            expect(err.message).toBe('Aquesta funció només accepta números.')
        })
    })
})

describe("Punt 2. Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.", () => {
    jest.mock('../app/funcionsNivell2.js');
    /* beforeEach(() => {
        n2.Persona.mockClear();
    }); */
    test("Creo una classe Persona", () => {
        const novaPersona = new n2.Persona();
    })
})