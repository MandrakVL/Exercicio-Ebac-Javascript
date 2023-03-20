let base = prompt("Digite o valor da base: ");
let altura = prompt("Digite o valor da altura: ");
base = parseInt(base);
altura = parseInt(altura);

function calculaArea(base, altura) {
    let calculo = base * altura;
    return calculo
}

alert("Valor da base: " + base + "\n Valor da altura: " + altura);
alert("Resultado: " + calculaArea(base, altura));