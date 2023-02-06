// Lista de Títulos, Posteres e Trailers
var titulos = ["Pantera Negra"," Guardiões da Galaxia vol.2","Mulher Maravilha 1984"]
var posteres = ["https://br.web.img2.acsta.net/pictures/17/12/07/16/09/2291532.jpg"," https://jpimg.com.br/uploads/2017/06/1457191292-guardioes-da-galaxia-vol-2-ganha-cartaz-oitentista-para-imax-702x1024.jpg","https://br.web.img3.acsta.net/pictures/20/06/23/20/57/4275033.jpg"]
var trailers = ["https://www.youtube.com/watch?v=wL4a4MafSjQ","https://www.youtube.com/watch?v=6FVulnc4poc","https://www.youtube.com/watch?v=Y5BejyusI2s"]

// Capturando a área que será exibido os filmes
var campoLista = document.getElementById('listaFilmes')

// Adicionando um filme a lista
function adicionarFilme() {
  // Gravando os dados do filme inseridos pelo usuário
  var titulo = document.getElementById('titulo').value
  var poster = document.getElementById('poster').value
  var trailer = document.getElementById('trailer').value
  
  // Limpa a lista de filmes no HTML
  campoLista.innerHTML = ""
  
  // Verificando o nome do filme na Lista
  if (verificarNome(titulo)) {
    alert("Este título está na lista! Por favor, informe um novo!")
  }
  else {
    if(poster.endsWith(".jpg") || poster.endsWith(".png")) {
      
      //Adicionado um novo filme à lista
      titulos.push(titulo)
      posteres.push(poster)
      trailers.push(trailer)
      
      // Limpa os campos
      document.getElementById('titulo').value = ""
      document.getElementById('poster').value = ""
      document.getElementById('trailer').value = ""
      
      // Mensagem de confirmação
      alert("O filme foi adicionado à lista com sucesso!")
      
    }
    else {
      alert("A imagem informada não possui um formato válido! Por favor, digite um endereço com formato .jpg ou .png")
    }
  }
}

// Removendo um filme de lista
function removerFilme() {
  // Gravando o titulo informado pelo usuário
  var titulo = document.getElementById('titulo').value
  
  // Posição do elemento na lista
  var posicao = titulos.indexOf(titulo)
  
  // Limpa a lista de filmes no HTML
  campoLista.innerHTML = ""
  
  // Caso a posição for -1 o titulo não foi encontrado na lista
  if (posicao == -1) {
    alert("Esse título não está presente na lista")
  }
  else {
    // Remover o filme informado da lista
    titulos.splice(posicao, 1)
    posteres.splice(posicao, 1)
    trailers.splice(posicao, 1)
    
    // Limpa os campos
    document.getElementById('titulo').value = ""
    document.getElementById('poster').value = ""
    document.getElementById('trailer').value = ""
    
    // Mensagem de confirmação
    alert("O filme foi removido da lista com sucesso!")
  }
}

// Mostrando a Lista de Filmes
function mostrarLista() {
  if (titulos.length == 0) {
    alert("A lista está vazia!")
  }
  else {
    // Limpa os campos
    document.getElementById('titulo').value = ""
    document.getElementById('poster').value = ""
    document.getElementById('trailer').value = ""

    // Montando o elemento para mostrar a lista no HTML
    var lista = ""

    for (var i = 0; i < titulos.length; i++) {
      lista += "<div class='item'>"
      lista += '<h3>' + titulos[i] + '</h3>'
      lista += '<a href=' + trailers[i] + ' target="_blank">'
      lista += '<img src="' + posteres[i] + '"></a>'
      lista += "</div>"
    }

    // Exibindo a lista no HTML
    campoLista.innerHTML = lista
  }
}

// Verifica se o nome do filme está na lista
function verificarNome(nomeDoFilme) {
  var estaNaLista = false
  for (var i in titulos) {
    if (nomeDoFilme == titulos[i]) {
      estaNaLista = true
    }
  }
  return estaNaLista
}