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
    var dividirZero=false;
    Array.from(arguments).forEach( (valor,index) => {
        if(valor===0 && index>0){dividirZero=true;}
    })
    if(dividirZero){return Error("No és permès dividir per 0.");}
    else{return aritmetica('/',arguments);}
}

module.exports = { sumar,restar,multiplicar,dividir }