var cartaPaulo = {
  nome:"Capitão América",
  atributos:{
    ataque:80,
    defesa:60,
    magia:90
  }
}

var cartaRafa = {
  nome:"Homem de Ferro",
  atributos:{
    ataque:70,
    defesa:65,
    magia: 85
  }
}

var cartaGui = {
  nome:"Thor",
  atributos:{
    ataque:88,
    defesa:62,
    magia:90
  }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaJogador == numeroCartaMaquina){
    numeroCartaJogador = parseInt(Math.random() * 3)
  }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos){
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +"'>" + atributo
  }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    alert('Venceu a maquina ☺')
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    alert('Perdeu. a carta da maquina era maior ○-○')
  } else {
    alert('Empatou!')
  }
  console.log(cartaMaquina)
}