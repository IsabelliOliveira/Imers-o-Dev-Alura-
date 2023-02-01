
    var nome = prompt("Olá! para iniciarmos por favor digite seu nome.");

    alert("Bem vindo a o Light years calculator " + nome);
    calculadora();

function calculadora() {
  var opcao = prompt(
    "Escolha a opção qual deseja calcular\n1 - Converter quilometros em anos luz\n2 - Converter anos em quilometros"
  );

  if (opcao == 1) {
    var quilometros = prompt(
      "Quantos Km (quilometros) deseja converter para anos luz?\nUse apenas . ao invés de ,"
    );
    quilometros = parseFloat(quilometros).toFixed(2);
    if (quilometros != "NaN") {
      var resultadoEmAnosLuz = quilometros / 9460800000000;
      alert(quilometros + "Km são " + resultadoEmAnosLuz + " ano(s) luz");
    } else {
      alert("Valor invalido");
    }
  } else if (opcao == 2) {
    var anosLuz = prompt(
      "Quantos anos luz deseja converter para Km (quilometros)?\nUse apenas . ao invés de ,"
    );
    if (anosLuz != "NaN") {
      var resultadoEmQuilometros = anosLuz * 9460800000000;
      alert(anosLuz + " ano(s) luz são " + resultadoEmQuilometros + "Km");
    } else {
      alert("Valor invalido");
    }
  } else {
    alert("Valor invalido");
  }
}

