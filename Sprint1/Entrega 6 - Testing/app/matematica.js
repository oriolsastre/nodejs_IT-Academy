function aritmetica(){
    const args = Array.from(arguments);
    const operand = args.shift();
    const valors = Array.from(args[0]);
    var operacio = new Array();
    valors.map(arg => {
        if(isNaN(arg)){throw new Error("No és un nombre!")}
        operacio.push(arg,operand);
    })
    if(valors.length === 0){throw new Error("No hi ha cap nombre.")}
    if(valors.length === 1){return valors[0];}
    operacio.pop();
    return eval(operacio.join(' '));
}

function sumar(){
    return aritmetica('+',arguments);
}

function restar(){
    return aritmetica('-',arguments);
}

function multiplicar(){
    return aritmetica('*',arguments);
}

function dividir(){
    Array.from(arguments).forEach( (valor,index) => {
        if(valor===0 && index>0){
            throw new Error("No és permès dividir per 0")
        }
    })
    return aritmetica('/',arguments);
}

module.exports = { sumar,restar,multiplicar,dividir }