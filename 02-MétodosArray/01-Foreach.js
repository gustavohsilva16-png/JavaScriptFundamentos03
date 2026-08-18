const frutas = ["Maça", "Banana", {
    codigo: 2,
    nome: "Uva"
}];//Frutas é nosso array

for (let i = 0; i < frutas.length; i++)// usamos para percorrer as frutas e começamos no 1 nesse for que definimos

{ console.log(`${frutas[i]}`); } // aqui percorremos o array frutas

frutas.forEach((A) => {
    if (A.codigo === 1) {
        console.log(A.nome)
    }
}); // esse usa o método forEach


