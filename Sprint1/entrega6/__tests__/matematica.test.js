const matematica = require('../app/matematica')

test("Sumar 3 elements", ()=>{
    expect(matematica.sumar(1,2,3)).toBe(6);
})