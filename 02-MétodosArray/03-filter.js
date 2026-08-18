const numeros = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10];

const pares = numeros.filter((num) => num % 2 === 0);

console.log(pares);
/*Em resumo são uma lista que define apenas os pares estritamente
divisiveis por 2 de forma que termine estritamente em zero, Dessa
forma ele seleciona apenas os numeros pares e ignora o resto
isso pq o filter ou filtro vai procurar apenas os pedidos*/