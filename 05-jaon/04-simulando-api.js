const respostaAPI = 
`[{"id":1, "nome": "Arthur"},
 {"id": 2, "nome": "Nicolas"}]`;

// Alterado para 'usuarios' (no plural) para bater com o forEach
const usuarios = JSON.parse(respostaAPI);

usuarios.forEach(aluno => { 
  console.log(aluno.nome); 
});