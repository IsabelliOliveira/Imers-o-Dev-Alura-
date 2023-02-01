var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 0 e 1000')
  //Se chute for igual ao numero secreto
  if(chute == numeroSecreto){
    alert("Parabéns voce acertou o Numero Secreto")
  }else if (chute > numeroSecreto){
    alert("Que pena, voce errou /n o Numero Secreto é menor ")
  }else if (chute < numeroSecreto){
    alert("Que pena, voce errou /n o Numero Secreto é maior ")
  }
}


