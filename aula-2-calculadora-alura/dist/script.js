var primeiroValor = parseInt(prompt("Digite o primeiro valor: "));
var segundoValor = parseInt(prompt("Digite o segundo valor: "));
var resultado = primeiroValor * segundoValor;

var operacao = prompt(
  "Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração: "
)

if (operacao == 1) {
  var resultado = primeiroValor / segundoValor;
  var sinal = " / "
} else if (operacao == 2) {
  var resultado = primeiroValor * segundoValor;
  var sinal = " x "
} else if (operacao == 3) {
  var resultado = primeiroValor + segundoValor;
  var sinal = " + "
} else {
  var resultado = primeiroValor - segundoValor;
  var sinal = " - "
}

document.write(
  "<h2>" + primeiroValor + sinal + segundoValor + " = " + resultado + "</h2>"
)

// escrevendo na tela - document.write()
// concanetação (juntar palavra com variáveis) - ("palabra" + variável)
// == - utilizado para comprar
// = - utilizado para fazer atribuição de valor

// if = se
// else if = senão se
// else = senão