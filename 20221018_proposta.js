function passarPortes(n,nombrePassades){
    //casos trivials
    if(n==0 || nombrePassades==0){return 0;}    //o no hi ha portes o no passem cap vegada a obrir-les
    else if(nombrePassades==1){return n;}       //obrim totes els portes un cop i ja està
    else if(n==1){return 1;}                    //aquest és així per que ja descartem el cas de 0 passades.

    //inicialitzem l'array portes amb totes les portes tancades, tancat=0
    var portes = Array(n).fill(0);
    
    for(let i=1;i<nombrePassades;i++){
        for(let p=(i-1);p<portes.length;p+=i){
            portes[p]=(portes[p]+1)%2;
        }
    }
    //sumem els valors de l'array porta, ja que cada porta oberta té valor de 1
    return portes.reduce((sumaPrevia,porta)=>sumaPrevia+porta);
}

console.log(passarPortes(9,10));