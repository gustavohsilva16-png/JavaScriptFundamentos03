function somar(...numero){
    return numero.reduce((total, numero) => total + numero, 0);

}

//usamos uma função dentro de uma função 

console.log(somar(10,20,30,40,50));