const mostraMissatge = (num,ite) => {console.log(`La suma iterativa dels digits de ${num} és ${ite}`)};
const sumaIterativa = (nombre, callback) => {
    //Exemple: 159 => 1+5+9=15 => 1+5=6
    const iteratiu = nombre%9;
    if(iteratiu===0){iteratiu=9;}
    if(nombre===0){iteratiu=0;}
    callback(nombre,iteratiu);
}

module.exports = {mostraMissatge, sumaIterativa}