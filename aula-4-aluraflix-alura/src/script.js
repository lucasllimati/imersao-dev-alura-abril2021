// var filmes = ["Star Wars", "Toy Story", "Velozes e Furiosos", "Esqueceram de mim", "De Volta ao Jogo", "UM NOVO DIA PARA MATAR", "Homem de Ferro", "Thor"]

// console.log(filmes[0])
// console.log(filmes.length)

// for (var i = 0; i < filmes.length; i++){
//   console.log(i + " - " + filmes[i])
// }

// var listaFilmesNomes = ["Pantera Negra", "Os Vingadores Ultimato", "Thor Ragnarok", "Guardiões da Galáxia", "Homem de Ferro", "Capitão América: O Soldado do Inverno"]

// console.log(listaFilmesMarvel.length)
// for (var i = 0; i < listaFilmes.length; i++){
//   document.write("<img src=" + listaFilmesMarvel[i] + ">")
//   document.write("<p>" + listaFilmesNomes[i] + "</p>")
// }



var listaFilmesMarvel = [
"https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10167917&qld=90&l=830&a=-1=1007943217",
"https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10573529&qld=90&l=830&a=-1=1007943217", 
"https://capas-g.wmixvideo.com.br/cx173884.jpg", 
"https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=8223847&qld=90&l=830&a=-1=1007943217",  
"https://i.pinimg.com/originals/45/74/e5/4574e53ff190140a2e57431b72b9e66e.jpg", 
"http://lojasaraiva.vteximg.com.br/arquivos/ids/12104391/1001335523.jpg?v=637142230067770000"]

var listaFilmesDC = [
"https://static.wikia.nocookie.net/dccomicsextendeduniverse/images/c/cb/%27Wonder_Woman%27_2017.jpg/revision/latest?cb=20191113161800&path-prefix=pt-br",
"http://lojasaraiva.vteximg.com.br/arquivos/ids/12111904/1004942005.jpg?v=637142258839400000",
"https://static.wikia.nocookie.net/dccomics/images/3/3a/Batman_vs_Superman_-_A_Origem_Da_Justi%C3%A7a_-_P%C3%B4ster.jpg/revision/latest?cb=20201217143514&path-prefix=pt",
"https://www.cafecomfilme.com.br/media/k2/items/cache/5f87bb0de25dad19a61b00e0cff4ea7c_XL.jpg?t=20200611_002937",
"https://img.elo7.com.br/product/zoom/268BA31/big-poster-filme-shazam-lo03-tamanho-90x60-cm-presente-geek.jpg",
"https://assets0.minhaserie.com.br/uploads/editor_pictures/000/066/862/content_pic.jpg"
]

var listaFilmesJW = [
  "https://images-na.ssl-images-amazon.com/images/I/51ESvcB2fWL._AC_SX569_.jpg",
  "http://br.web.img3.acsta.net/pictures/17/01/10/15/05/404753.jpg",
  "http://br.web.img3.acsta.net/pictures/19/04/03/21/31/0977319.jpg",
  "https://i.redd.it/h7hqontmk2c31.jpg",
  "https://passeioskids.com/wp-content/uploads/2020/09/matrix.jpeg",
  "https://i.pinimg.com/originals/e5/07/41/e507411945d3cef4f1a6899395b1404b.png"
]

var listaFilmesSeries = [
  "https://images-na.ssl-images-amazon.com/images/I/51Nh3Voe-cL._SY445_.jpg",
"https://i.pinimg.com/originals/2d/1c/ef/2d1cef51c8080c60efd1675bca95e67f.png",
  "https://images-na.ssl-images-amazon.com/images/I/71z2iUNdyHL._AC_SY679_.jpg",
  "https://i.pinimg.com/originals/d6/0d/e1/d60de1938bf4b03ba1c2ddcd3632eca5.jpg",
  "https://strapi.api-tvcine.com/uploads/8b95ec54789349d6879b8e7aae2a3e34.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91FtRcoQxSL.jpg"
]

for(i = 0; i < listaFilmesMarvel.length; i++){
  var img = document.createElement("IMG")
  img.src = listaFilmesMarvel[i]
  document.getElementById("marvel").appendChild(img)
}

for(i = 0; i < listaFilmesDC.length; i++){
  var img = document.createElement("IMG")
  img.src = listaFilmesDC[i]
  document.getElementById("dc").appendChild(img)
}

for(i = 0; i < listaFilmesJW.length; i++){
  var img = document.createElement("IMG")
  img.src = listaFilmesJW[i]
  document.getElementById("jw").appendChild(img)
}

for(i = 0; i < listaFilmesSeries.length; i++){
  var img = document.createElement("IMG")
  img.src = listaFilmesSeries[i]
  document.getElementById("series").appendChild(img)
}