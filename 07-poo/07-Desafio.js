class Aluno {
  constructor(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  calculoMedia() {
    return (this.nota1 + this.nota2) / 2;
  }

  verificarSituacao() {
    return this.calculoMedia() >= 7 ? "Aprovado" : "Reprovado";
  }

  exibirDados() {
    console.log(`${this.nome} - Média: ${this.calculoMedia()} | ${this.verificarSituacao()}`);
  }
}

// Testando a classe
const aluno1 = new Aluno("Pablo", 8, 6);
aluno1.exibirDados(); // Imprime: Pablo - Média: 7 | Aprovado