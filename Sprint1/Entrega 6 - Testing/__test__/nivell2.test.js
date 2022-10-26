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

    })
})