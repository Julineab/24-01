function calcular(operador) {
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    const resultadoDiv = document.getElementById('resultado');

if (numero1 === '' || numero2 === '') {
    resultadoDiv.textContent = "Preencha os dois campos.";
    return;
}

const valor1 = parseFloat(numero1);
const valor2 = parseFloat(numero2);

if (isNaN(valor1) || isNaN(valor2)) {
    resultadoDiv.textContent = "Insira números válidos.";
    return;
}

let resultado;
switch (operador) {
    case '+':
        resultado = valor1 + valor2;
        break;
    case '-':
        resultado = valor1 - valor2;
        break;
    case '*':
        resultado = valor1 * valor2;
        break;
    case '/':
        if (valor2 === 0) {
            resultadoDiv.textContent = "Erro: divisão por zero.";
            return;
        }
        resultado = valor1 / valor2;
        break;
    default:
        resultadoDiv.textContent = "Operação inválida.";
        return;
}
resultadoDiv.textContent = resultado; {resultado};

}
