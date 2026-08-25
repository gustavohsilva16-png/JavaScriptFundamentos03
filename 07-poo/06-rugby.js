class Jogador_rugby {
    constructor(nome, numero, posicao){ 

        this.nome = nome;
        this.numero = numero;
        this.posicao = posicao;
    }
}

correr ()
{console.log(`${this.nome} está correndo com a bola.`)}

passarBola()
{console.log(`${this.nome} passou a bola.`)}

mostrarDados()
{
    console.log(`Nome: ${this.nome}`);
    console.log(`Posição: ${this.posicao}`);
    console.log(`Numero: ${this.numero}`);
}

const jogador1 = new Jogador_rugby("Pablo", 10, "Abertura");

jogador1.mostrarDados();
jogador1.correr();
jogador1.passarBola();

const jogador2 = new Jogador_rugby("Rafa", 11, "Ponta");

jogador2.mostrarDados();
jogador2.correr();
jogador2.passarBola();
