var cartaJogador1 = {
	nome: "Homem Aranha",
  imagem: "https://conteudo.imguol.com.br/c/entretenimento/ba/2018/12/19/cena-do-game-homem-aranha-exclusivo-para-o-playstation-4-1545237822496_v2_1920x1080.png",
	atributos: {
		ataque: 95,
		defesa: 60,
		magia: 20
	}
}

var cartaJogador2 = {
	nome: "Homem de Ferro",
  imagem: "https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg",
	atributos: {
		ataque: 90,
		defesa: 70,
		magia: 20
	}
}

var cartaJogador3 = {
	nome: "Hulk",
	imagem: "https://www.einerd.com.br/wp-content/uploads/2020/11/Hulk-capa.jpg",
	atributos: {
		ataque: 100,
		defesa: 80,
		magia: 0
	}
}

var cartaJogador4 = {
	nome: "Capitão America",
	imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/06/Captain-America.jpg",
	atributos: {
		ataque: 80,
		defesa: 99,
		magia: 10
	}
}

var cartaJogador5 = {
	nome: "Pantera Negra",
	imagem: "https://i.pinimg.com/564x/4c/83/4f/4c834f78e11668bc1148496d78b13bb2.jpg",
	atributos: {
		ataque: 100,
		defesa: 100,
		magia: 100
	}
}

var cartaJogador6 = {
	nome: "Thanos",
	imagem: "https://sm.ign.com/t/ign_br/news/t/thanos-sna/thanos-snap-has-an-official-name-and-its-brutal_fkdg.1200.jpg",
	atributos: {
		ataque: 70,
		defesa: 80,
		magia: 100
	}
}

var cartaJogador7 = {
	nome: "Thor",
	imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/11/thor-4-e1560859709715.jpg",
	atributos: {
		ataque: 90,
		defesa: 70,
		magia: 100
	}
}

var cartaJogador8 = {
	nome: "Gavião Arqueiro",
	imagem: "https://i.pinimg.com/originals/06/a7/da/06a7da9e350037d87554740bbace15d6.jpg",
	atributos: {
		ataque: 80,
		defesa: 80,
		magia: 0
	}
}

// var cartaJogador9 = {
// 	nome: "Doutor Estranho",
// 	imagem: "https://i.pinimg.com/originals/06/a7/da/06a7da9e350037d87554740bbace15d6.jpg",
// 	atributos: {
// 		ataque: 70,
// 		defesa: 50,
// 		magia: 100
// 	}
// }

// var cartaJogador10 = {
// 	nome: "Visão ",
// 	imagem: "https://i.pinimg.com/originals/e9/07/1d/e9071dbd1ca91a1a0f7357657e5bc77b.jpg",
// 	atributos: {
// 		ataque: 90,
// 		defesa: 60,
// 		magia: 0
// 	}
// }

// var cartaJogador11 = {
// 	nome: "Deadpool",
// 	imagem: "https://www.einerd.com.br/wp-content/uploads/2019/08/Deadpool-Disney-UCM-capa-890x466.jpg",
// 	atributos: {
// 		ataque: 80,
// 		defesa: 100,
// 		magia: 80
// 	}
// }

// var cartaJogador12 = {
// 	nome: "Viuva Negra",
// 	imagem: "https://i.pinimg.com/originals/d0/bf/d2/d0bfd24c611481a0d2334a83f0fac97a.jpg",
// 	atributos: {
// 		ataque: 50,
// 		defesa: 70,
// 		magia: 0
// 	}
// }

// var cartaJogador13 = {
// 	nome: "Gamora",
// 	imagem: "https://static.wikia.nocookie.net/marvel-cinematic/images/f/f0/Guardi%C3%B5es_Vol._2_P%C3%B4ster_Chin%C3%AAs_crop_Gamora.png/revision/latest?cb=20180517041233&path-prefix=pt-br",
// 	atributos: {
// 		ataque: 70,
// 		defesa: 50,
// 		magia: 0
// 	}
// }

// var cartaJogador14 = {
// 	nome: "Thor Gordo",
// 	imagem: "https://ovicio.com.br/wp-content/uploads/2019/10/20191017-1e27bc8ffcef5fde68774b620ebe651f5724f737-1200x675.jpg",
// 	atributos: {
// 		ataque: 0,
// 		defesa: 0,
// 		magia: 0
// 	}
// }

// var cartaJogador15 = {
// 	nome: "Feiticeira Escarlate",
// 	imagem: "https://static.wikia.nocookie.net/universocinematograficomarvel/images/3/39/Scarlet_Witch_AIW_Profile.jpg/revision/latest?cb=20190110182714&path-prefix=pt",
// 	atributos: {
// 		ataque: 100,
// 		defesa: 80,
// 		magia: 100
// 	}
// }

var cartaMaquina
var cartaJogador
var cartas = [cartaJogador1, cartaJogador2, cartaJogador3, cartaJogador4, cartaJogador5, cartaJogador6, cartaJogador7, cartaJogador8]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
	var divQuantidadeCartas = document.getElementById('quantidade-cartas')
	var html = "Quantidade de cartas no jogo: " + cartas.length
	
	divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
	var divPlacar = document.getElementById('placar')
	var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
	
	divPlacar.innerHTML = html
}

function sortearCarta() {
	var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
	cartaMaquina = cartas [numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)
	
	var numeroCartaJogador = parseInt(Math.random() * cartas.length)
	cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
  
	document.getElementById('btnSortear').disabled = true
	document.getElementById('btnJogar').disabled = false
  
  exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' checked value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
	var radioAtributo = document.getElementsByName('atributo')
  
	for (var i = 0; i < radioAtributo.length; i++) {
		if (radioAtributo[i].checked) {
			return radioAtributo[i].value
		}
	}
}

function jogar() {
  var divResultado = document.getElementById('resultado')
	var atributoSelecionado = obtemAtributoSelecionado()
	
	if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
		htmlResultado = '<p class="resultado-final">Venceu</p>'
    pontosJogador++
	} else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
		htmlResultado = '<p class="resultado-final">Perdeu</p>'
    pontosMaquina++
	} else {
		htmlResultado = '<p class="resultado-final">Empatou</p>'
	}
  
  if (cartas.length == 0) {
    alert("Fim de jogo!")
    if (pontosJogador > pontosMaquina) {
      htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (pontosMaquina > pontosJogador) {
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
    } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }
  
  divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true
  
  atualizaPlacar()
  exibeCartaMaquina()
  atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
	var divCartas = document.getElementById('cartas')
	
	divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
	
	document.getElementById('btnSortear').disabled = false
	document.getElementById('btnJogar').disabled = true
	document.getElementById('btnProximaRodada').disabled = true
	
	var divResultado = document.getElementById('resultado')
	divResultado.innerHTML = ""
}