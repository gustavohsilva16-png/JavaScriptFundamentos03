class Produto {
  constructor(nome, preco) {
    this.nome = nome;  // Faltava a atribuição (=)
    this.preco = preco;
  }

  // O método deve ficar dentro da classe
  aplicarDesconto(percentual) {
    this.preco -= this.preco * (percentual / 100);
  }
}

// 1. Criando o Teclado e aplicando desconto
const teclado = new Produto("Teclado", 100);
teclado.aplicarDesconto(10); // Preço passa a ser 90
console.log(teclado);

// 2. Criando o Mouse com um novo nome de variável
const mouse = new Produto("Mouse", 70);
console.log(mouse);