const aluno = {
    nome: "Sofia", // 1. Vírgula obrigatória para separar propriedades
    apresentar() {
        console.log(`Meu nome é ${this.nome}`);
    }
};

aluno.apresentar(); // 2. O ponto e vírgula fica fora dos parênteses