class Pessoa {
  #nome;

  constructor(nome) {
    this.#nome = nome;
  }

  // Getter e Setter precisam ficar dentro da classe
  get nome() {
    return this.#nome; // Retorna o atributo privado #nome
  }

  set nome(valor) {
    if (valor.length >= 2) {
      this.#nome = valor;
    }
  }
}

// Classe com 'P' maiúsculo e variável com 'p' minúsculo
const pessoa = new Pessoa("Miguel");
console.log(pessoa.nome); // "Miguel"

pessoa.nome = "Vitoria";
console.log(pessoa.nome); // "Vitoria"