function aritmetica(){
    const args = Array.from(arguments);
    const operand = args.shift();
    const valors = Array.from(args[0]);
    var operacio = new Array();
    valors.map(arg => {
        operacio.push(arg,operand);
    })
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
    return aritmetica('/',arguments);
}

module.exports = (sumar,restar,multiplicar,dividir)