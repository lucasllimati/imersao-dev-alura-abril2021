// alert - docment.write - console.log

var numeroSecreto = parseInt(Math.random() * 10);
var tentativas = 3;
alert(numeroSecreto);

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10: "));

  if (numeroSecreto == chute) {
    alert("Acertou, parabéns!");
    break;
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor.");
    tentativas -= 1;
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior.");
    tentativas -= 1;
  }
}

if (chute != numeroSecreto) {
  alert(" Suas tentativas acabaram. O número secreto era " + numeroSecreto);
}
