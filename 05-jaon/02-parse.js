// 3. JSON.parse: Converte String JSON -> Objeto JS
const aluno = `{"nome": "Tiago", "nota":8}`;

const json = JSON.parse(aluno);
console.log(json); // "Tiago"
console.log(json.nome)

