const matematica = require('../app/matematica')

test("Sumar/Restar/Multiplicar/Dividir 3 elements", ()=>{
    expect(matematica.sumar(1,2,3)).toBe(6);
    expect(matematica.restar(3,2,1)).toBe(0);
    expect(matematica.multiplicar(1,2,3)).toBe(6);
    expect(matematica.dividir(8,4,2)).toBe(1);
})