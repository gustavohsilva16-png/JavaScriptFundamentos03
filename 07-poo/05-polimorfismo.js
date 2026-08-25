// Boa prática: Nomes de classes com a primeira letra maiúscula (PascalCase)
class Pessoa {
  apresentar() {
    console.log("Sou Humano");
  }
}

class Professor extends Pessoa {
  apresentar() {
    console.log("Sou professor");
  }
}

class Aluno extends Pessoa {
  apresentar() {
    console.log("Sou Aluno");
  }
}

// Execução
new Professor().apresentar(); // Imprime: "Sou professor"
new Aluno().apresentar();     // Imprime: "Sou Aluno"