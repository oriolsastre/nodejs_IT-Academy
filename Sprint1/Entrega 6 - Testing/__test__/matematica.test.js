const matematica = require('../app/matematica')

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
    }).toThrow(Error);
    expect(() => {
        matematica.dividir(1,0,5)
    }).toThrow(Error);
    expect(() => {
        matematica.dividir(1,5,0)
    }).toThrow(Error);
    expect(() => {
        matematica.dividir(0,0)
    }).toThrow(Error);
    expect(() => {
        matematica.dividir(0,0,1)
    }).toThrow(Error);
    expect(matematica.dividir(0,1)).toBe(0);
})

test("Només acceptar nombres, o nombres com a String.", () => {
    expect(()=>{
        matematica.sumar("a","b",5)
    }).toThrow(Error);
    expect(matematica.restar(1,2,"-5")).toBe(4);
    expect(()=>{
        matematica.multiplicar()
    }).toThrow(Error);
    expect(()=>{
        var arrayError = new Array(5);
        matematica.sumar(arrayError,5)
    }).toThrow(Error);
})