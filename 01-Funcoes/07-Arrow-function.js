// Função declarada (tradicional)
function somarTradicional(A, B) {
  return A + B;
}

// Função anônima
const somarAnonima = function (A, B) {
  return A + B;
};

console.log(somarTradicional(10, 5)); // Retorna 15
console.log(somarAnonima(10, 5));     // Retorna 15


const somaArrowFunction = (a,b) => {return a,b};

console.log(somarTradicional(10, 5)); // Retorna 15
console.log(somarAnonima(10, 5));     // Retorna 15
console.log(somaArrowFunction(10,5));
