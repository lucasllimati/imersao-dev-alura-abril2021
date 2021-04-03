function cadastrarFilme() {
  adicionarNomeFilme()
  adicionarFilme()
  adicionarTrailer()
}

//Nome do filme
function adicionarNomeFilme() {
  var campoNomeFilme = document.querySelector('#nome')
  var nomeFilme = campoNomeFilme.value.toUpperCase()
  listarNomeNaTela(nomeFilme)
  campoNomeFilme.value = ""
}

function listarNomeNaTela(nome) {
  var listaNome = document.querySelector('#listaNomes')
  var elementoNome = "<p>" + nome + "</p>"
  listaNome.innerHTML = listaNome.innerHTML + elementoNome
  console.log(listaNome.innerHTML)
}

//Foto do filme
function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito)    
  } else {
    alert("Imagem inválida!")
  }
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

//Trailer do filme
function adicionarTrailer() {
  var campoTrailerFavorito = document.querySelector('#trailer')
  var trailerFavorito = campoTrailerFavorito.value
  var resultado = trailerFavorito.split("watch?v=");
  // console.log(trailerFavorito)
  // console.log(resultado)
  // console.log(resultado[0])
  // console.log(resultado[1])
  link = "https://www.youtube.com/embed/" + resultado[1]
  // console.log(link)
  trailerFavorito = link
  listarTrailerNaTela(trailerFavorito)
  trailerFavorito.value = ""
}

function listarTrailerNaTela(trailer) {
  var listaTrailer = document.querySelector('#listaTrailer')
  var elementoTrailer = '<iframe width="560" height="315" src="' + trailer + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>'
  console.log(elementoTrailer)
  listaTrailer.innerHTML = listaTrailer.innerHTML + elementoTrailer
}





//TESTE DE LÓGICA

// function teste() {
//   var campoTrailerFavorito = document.querySelector('#trailer')
//   var trailerFavorito = '<iframe width="560" height="315" src="https://www.youtube.com/embed/bpOR_HuHRNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//   teste1(trailerFavorito)
//   console.log(trailerFavorito)
//   // trailerFavorito.value = ""
// }

// function teste1(trailer) {
//   var listaTrailer = document.querySelector('#listaTrailer')
//   var elementoTrailer = trailer
//   listaTrailer.innerHTML = listaTrailer.innerHTML + elementoTrailer
// }

// var stringExemplo = "https://www.youtube.com/watch?v=UtF6Jej8yb4";
// var resultado = stringExemplo.split("watch?v=");
// console.log(stringExemplo)
// console.log(resultado)
// console.log(resultado[0])
// console.log(resultado[1])