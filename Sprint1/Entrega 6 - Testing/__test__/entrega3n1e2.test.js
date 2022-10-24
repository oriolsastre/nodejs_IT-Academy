const n1e2 = require('../app/entrega3n1e2')

test("Només accepta números", () => {
    const mostraMissatge = n1e2.mostraMissatge
    const callbackNull = (n,i) => {return n;}
    expect(()=>{
        n1e2.sumaIterativa("b",mostraMissatge).toThrow(Error)
    })
    expect(()=>{
        n1e2.sumaIterativa(Infinity,mostraMissatge).toThrow(Error)
    })
    expect(n1e2.sumaIterativa(19,callbackNull)).toBe(1);
})