//Aqui é uma forma em foreach
const alunos = [
    {nome: "Gustavo", nota: 9},
    {nome: "Alice", nota: 7},
];
/*tradução: Alunos.foreach é uma forma de dizer percorra o array alunos, ((a) =>  */
alunos.forEach((a)=> console.log(`A aluna ${a.nome} a nota: ${a.nota}`));


//Isso abaixo é uma forma For de exibir
for(let i = 0; i < alunos.length; i++){
    console.log(`A aluno ${alunos[i].nome} a nota: ${alunos[i].nota}`)
}

const json = JSON.stringify(alunos);
console.log(json);