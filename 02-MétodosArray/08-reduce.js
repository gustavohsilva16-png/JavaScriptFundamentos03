const valores = [10, 20, 30, 40, 50];

const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(total);
/* De forma resumida dentro deste comando
Oque vai ocorrer é que dentro da lista vamos ter
um numero que acumula e dispersa em soma
0 é o valor inicial e o primeiro da lista é 10 então ele se
torna 10, Seguindo ele vai levar o 10 e somar ele ao 20 restando 30,
*/