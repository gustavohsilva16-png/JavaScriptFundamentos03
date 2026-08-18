let nomes = ["João", "Julia", "Larissa", "Livia"];

//Ele aqui encontra um nome que está na lista
const indice = nomes.find((n) => n === "Larissa");
console.log(indice);

// aqui ele encontra um valor chamado -1 pois o nome abaixo não está na lista
const indice1 = nomes.findIndex((n) => n === "Matheus");
console.log(indice1)