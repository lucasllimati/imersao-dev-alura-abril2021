var valoremDolarTexto = prompt(
  "Qual o valor em dólar que você quer converter? "
);

var valoremDolarNumero = parseFloat(valoremDolarTexto);

var valorEmReal = valoremDolarNumero * 5.5;
var valorEmRealFixado = valorEmReal.toFixed(2);

window.alert(valorEmRealFixado);

// Revisão
// Variáveis var int - float - string
// alert - parseInt - parseFloat - prompt
// operações + somar * multiplicar
// comertário final
