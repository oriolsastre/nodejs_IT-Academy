const matematica = require('../app/matematica')

test("Sumar/Restar/Multiplicar/Dividir 3 elements", ()=>{
    expect(matematica.sumar(1,2,3)).toBe(6);
    expect(matematica.restar(3,2,1)).toBe(0);
    expect(matematica.multiplicar(1,2,3)).toBe(6);
    expect(matematica.dividir(8,4,2)).toBe(1);
})

test("Fer operacions amb números negatius", () => {
    expect(matematica.sumar(-1,2,3)).toBe(4);
    expect(matematica.restar(3,-2,1)).toBe(4);
    expect(matematica.multiplicar(1,2,-3)).toBe(-6);
    expect(matematica.dividir(8,-4,-2)).toBe(1);
})

test("No es pot dividir per 0", () => {
    expect(matematica.dividir(1,0)).toBe(Error);
})