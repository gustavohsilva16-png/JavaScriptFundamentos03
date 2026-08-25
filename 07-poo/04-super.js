class Funcionario{
    constructor(nome, salario)
    {this.nome = nome;
        this.salario = salario;
    }
}

class professor extends Funcionario{
    constructor(nome,salario,disciplina)
    {super(nome, salario);
        this.disciplina = disciplina;
    }
}

const professor = new professor("Marcos", 5000, "Programação");
console.log(professor);