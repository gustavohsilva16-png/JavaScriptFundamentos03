// 1. Criando objeto JavaScript
const aluno = { nome: "Pablo", nota: 8 };
console.log(aluno.nome); // "Pablo"

// 2. JSON.stringify: Converte Objeto JS -> String JSON
const json = JSON.stringify(aluno);
console.log(json); // '{"nome":"Pablo","nota":8}'