const matematica = require('../app/matematica')
const e3 = require('../app/entrega3')

describe("Punt 1. Testejar les funcions matemàtiques de sumar, restar, multiplicar i dividir 2 o més arguments.", () => {
    test("Fer operacions amb 1, 2 o més nombres", ()=>{
        expect(matematica.sumar(1)).toBe(1);
        expect(matematica.restar(3,2)).toBe(1);
        expect(matematica.multiplicar(1,2,3)).toBe(6);
        expect(matematica.dividir(8,4,2,1)).toBe(1);
    })
    
    test("Fer operacions amb números negatius", () => {
        expect(matematica.sumar(-1,2,3)).toBe(4);
        expect(matematica.restar(3,-2,1)).toBe(4);
        expect(matematica.multiplicar(1,2,-3)).toBe(-6);
        expect(matematica.dividir(8,-4,-2)).toBe(1);
    })
    
    test("Fer operacions amb decimals", () => {
        expect(matematica.sumar(0.25,1.78,-2.56)).toBe(0.25+1.78-2.56);
        expect(matematica.restar(0.25,1.78,-2.56)).toBe(0.25-1.78+2.56);
        expect(matematica.multiplicar(0.25,1.78,-2.56)).toBe(0.25*1.78*-2.56);
        expect(matematica.dividir(0.25,1.78,-2.56)).toBe((0.25/1.78)/-2.56);
    })
    
    test("No es pot dividir per 0, en cap posició, excepte si NOMÉS és la primera.", () => {
        expect(() => {
            matematica.dividir(1,0)
        }).toThrow(Error("No és permès dividir per 0"));
        expect(() => {
            matematica.dividir(1,0,5)
        }).toThrow(Error("No és permès dividir per 0"));
        expect(() => {
            matematica.dividir(1,5,0)
        }).toThrow(Error("No és permès dividir per 0"));
        expect(() => {
            matematica.dividir(0,0)
        }).toThrow(Error("No és permès dividir per 0"));
        expect(() => {
            matematica.dividir(0,0,1)
        }).toThrow(Error("No és permès dividir per 0"));
        expect(matematica.dividir(0,1)).toBe(0);
    })
    
    test("Només acceptar nombres, o nombres com a String.", () => {
        expect(()=>{
            matematica.sumar("a","b",5)
        }).toThrow(Error("No és un nombre!"));
        expect(matematica.restar(1,2,"-5")).toBe(4);
        expect(()=>{
            matematica.multiplicar()
        }).toThrow(Error("No hi ha cap nombre."));
        expect(()=>{
            var arrayError = new Array(5);
            matematica.sumar(arrayError,5)
        }).toThrow(Error("No és un nombre!"));
    })
})

describe("Punt 2. Testejar les dues funcions de l'Entrega 3 Promises i Callbacks, Nivell 1 Exercici 2.", () => {
    const mockFn = jest.fn((x,y) => {y})
    test("Funcionament normal de la suma iterativa de nombres amb 1, 2 o més dígits", () => {
        e3.sumaIterativa(2,mockFn);
        expect(mockFn).toHaveBeenCalledWith(2,2)
        e3.sumaIterativa(37,mockFn);
        expect(mockFn).toHaveBeenCalledWith(37,1)
        e3.sumaIterativa(159,mockFn);
        expect(mockFn).toHaveBeenCalledWith(159,6)
        e3.sumaIterativa(7353,mockFn);
        expect(mockFn).toHaveBeenCalledWith(7353,9)
    })
    test("Només acceptar nombres enters.", () => {
        expect(()=>{
            e3.sumaIterativa("b",mockFn)
        }).toThrow(Error("La suma iterativa requereix un nombre enter."))
        expect(()=>{
            e3.sumaIterativa(1.25,mockFn)
        }).toThrow(Error("La suma iterativa requereix un nombre enter."))
    })
})

describe("Punt 3. Testejar les funcions de getEmployee i getSalary", () => {
    test("La funció getEmployee retorna l'empleat corresponent amb una id vàlida", () =>{
        for(var index in e3.employees){
            return e3.getEmployee(e3.employees[index].id).then(empleat => {
                expect(empleat).toBe(e3.employees[index])
            })
        }
        //número donat també com a string
        return e3.getEmployee("2").then(empleat => {
            expect(empleat).toBe(e3.employees[2])
        })
    })
    test("L'id de l'empleat no existeix a l'objecte on el busquem.", async () => {
        var indexSuperior = (e3.employees[e3.employees.length-1].id)+1; //obtinc un id+1 de l'id de l'últim empleat. Com que estan ordenats, serà més gran que quaslevol altre, és a dir, no existirà
        await expect(e3.getEmployee(indexSuperior)).rejects.toThrow(Error(`No s'ha trobat cap empleat amb id ${indexSuperior}.`))
    })
    test("La id no és vàlida, perquè no és un número enter.", async () => {
        await expect(e3.getEmployee('a')).rejects.toThrow(Error(`L'ID ha de ser un número enter.`))
        await expect(e3.getEmployee(1.25)).rejects.toThrow(Error(`L'ID ha de ser un número enter.`))
    })
    test("La funció getSalary retorna un salari si se li dona un empleat vàlid.", () => {
        for(var index in e3.employees){
            return e3.getSalary(e3.employees[index]).then(salari => {
                expect(typeof salari).toBe('number')
            })
        }
    })
    test("Retorn d'error si se li dona un empleat que no té un salari associat", async () => {
        const empleatFals = {
            id: 5,
            name: 'Oriol Sastre'
        }
        await expect(e3.getSalary(empleatFals)).rejects.toThrow(Error("No s'ha trobat aquest empleat."))
    })
    test("Retorn d'error si l'empleat no té una id vàlida o si no és un objecte d'empleat vàlid.", async () => {
        const empleatFals = {
            id: 'a',
            name: 'Oriol Sastre'
        }
        await expect(e3.getSalary(empleatFals)).rejects.toThrow(Error(`Objecte d'empleat invàlid o sense id vàlida!`))
        await expect(e3.getSalary('text')).rejects.toThrow(Error(`Objecte d'empleat invàlid o sense id vàlida!`))
        await expect(e3.getSalary(2)).rejects.toThrow(Error(`Objecte d'empleat invàlid o sense id vàlida!`))
    })
})

describe("Punt 4. Verificar el funcionament de la funció de l'Entrega 4 Nivell 1 Exercici 2", () => {
    test("El timeout interior que espera 2 segons és cridat.", async () => {
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
        await e3.cridaFuncio();
        expect(setTimeout).toHaveBeenCalledTimes(1);
    })
})