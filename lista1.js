import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

 // Questão 1 — Aprovação do aluno
function question1() {
    rl.question("Digite a nota do aluno: ", (resposta) => {
        let nota = parseFloat(resposta);

        if (nota >= 7) {
            console.log("Aprovado");
        } else if (nota >= 5 && nota <= 6.9) {
            console.log("Recuperação");
        } else {
            console.log("Reprovado");
        }

        question2();
    });
}

// Questão 2 — Faixa etária
function question2() {
    rl.question("Digite o ano de nascimento: ", (resposta) => {
        let anoNascimento = parseInt(resposta);
        let anoAtual = new Date().getFullYear();
        let idade = anoAtual - anoNascimento;

        if (idade <= 12) {
            console.log("Criança");
        } else if (idade >= 13 && idade <= 17) {
            console.log("Adolescente");
        } else if (idade >= 18 && idade <= 59) {
            console.log("Adulto");
        } else {
            console.log("Idoso");
        }

        question3();
    });
}

// Questão 3 — Reajuste de salário
function question3() {
    rl.question("Digite quanto você ganha por mês: ", (resposta) => {
        let salario = parseFloat(resposta);

        rl.question("Digite o percentual de aumento: ", (resposta) => {
            let aumento = parseFloat(resposta);

            if (salario < 1500) {
                aumento = aumento * 2;
            }

            let novoSalario = salario + salario * aumento / 100;
            console.log("Novo salário: R$", novoSalario);

            question4();
        });
    });
}

// Questão 4 — Maior número entre três
function question4() {
    rl.question("Digite o primeiro número: ", (resposta) => {
        let num1 = parseFloat(resposta);

        rl.question("Digite o segundo número: ", (resposta) => {
            let num2 = parseFloat(resposta);

            rl.question("Digite o terceiro número: ", (resposta) => {
                let num3 = parseFloat(resposta);

                let maior = num1;
                if (num2 > maior) maior = num2;
                if (num3 > maior) maior = num3;

                console.log("O maior número é:", maior);

                question5();
            });
        });
    });
}

// Questão 5 — Desconto por valor de compra
function question5() {
    rl.question("Valor total da compra: ", (resposta) => {
        let valorCompra = parseFloat(resposta);

        let descontoPorcentagem;

        if (valorCompra < 100) {
            descontoPorcentagem = 0;
        } else if (valorCompra <= 299.99) {
            descontoPorcentagem = 10;
        } else if (valorCompra <= 499.99) {
            descontoPorcentagem = 15;
        } else {
            descontoPorcentagem = 20;
        }

        let valorDesconto = valorCompra * descontoPorcentagem / 100;
        let valorFinal = valorCompra - valorDesconto;

        console.log("Valor total da compra: R$", valorCompra);
        console.log("Valor do desconto: R$", valorDesconto);
        console.log("Valor a pagar: R$", valorFinal);

        question6();
    });
}

// Questão 6 — Cédulas do saque
function question6() {
    rl.question("Que valor deseja sacar? ", (resposta) => {
        let valorSaque = parseInt(resposta);

        if (valorSaque % 10 !== 0) {
            console.log("Digite um valor múltiplo de 10.");
            rl.close();
            return;
        }

        let cedulas100 = parseInt(valorSaque / 100); valorSaque %= 100;
        let cedulas50  = parseInt(valorSaque / 50);  valorSaque %= 50;
        let cedulas20  = parseInt(valorSaque / 20);  valorSaque %= 20;
        let cedulas10  = parseInt(valorSaque / 10);

        console.log("Cédulas de R$ 100:", cedulas100);
        console.log("Cédulas de R$ 50:", cedulas50);
        console.log("Cédulas de R$ 20:", cedulas20);
        console.log("Cédulas de R$ 10:", cedulas10);

        question7();
    });
}

// Questão 7 — Calculadora simples
function question7() {
    rl.question("Digite o primeiro número: ", (resposta) => {
        let numero1 = parseFloat(resposta);

        rl.question("Digite o segundo número: ", (resposta) => {
            let numero2 = parseFloat(resposta);

            rl.question("Digite a operação (+, -, *, /): ", (resposta) => {
                let operacao = resposta.trim();
                let resultado;

                switch (operacao) {
                    case "+":
                        resultado = numero1 + numero2;
                        console.log("Resultado:", resultado);
                        break;
                    case "-":
                        resultado = numero1 - numero2;
                        console.log("Resultado:", resultado);
                        break;
                    case "*":
                        resultado = numero1 * numero2;
                        console.log("Resultado:", resultado);
                        break;
                    case "/":
                        if (numero2 === 0) {
                            console.log("Não é possível dividir por zero.");
                        } else {
                            resultado = numero1 / numero2;
                            console.log("Resultado:", resultado);
                        }
                        break;
                    default:
                        console.log("Operação inválida.");
                }

                question8();
            });
        });
    });
}

// Questão 8 — Valor final da pizza
function question8() {
    rl.question("Digite o tamanho da pizza (P, M, G): ", (resposta) => {
        let tamanho = resposta.toUpperCase().trim();
        let precoBase;

        switch (tamanho) {
            case "P": precoBase = 25; break;
            case "M": precoBase = 35; break;
            case "G": precoBase = 45; break;
            default:
                console.log("Tamanho inválido!");
                rl.close();
                return;
        }

        rl.question("Digite o tipo de borda (tradicional ou recheada): ", (resposta) => {
            let borda = resposta.toLowerCase().trim();
            let valorBorda;

            if (borda === "tradicional") {
                valorBorda = 0;
            } else if (borda === "recheada") {
                valorBorda = 8;
            } else {
                console.log("Tipo de borda inválido!");
                rl.close();
                return;
            }

            console.log("Valor final da pizza: R$", precoBase + valorBorda);

            question9();
        });
    });
}

// Questão 9 — Dias do mês
function question9() {
    rl.question("Digite o número do mês (1-12): ", (resposta) => {
        let mes = parseInt(resposta);

        if (isNaN(mes) || mes < 1 || mes > 12) {
            console.log("Número do mês inválido!");
            rl.close();
            return;
        }

        function exibirMes(bissexto = false) {
            switch (mes) {
                case 1:  console.log("Janeiro - 31 dias");   break;
                case 2:  console.log("Fevereiro - " + (bissexto ? "29 dias" : "28 dias")); break;
                case 3:  console.log("Março - 31 dias");     break;
                case 4:  console.log("Abril - 30 dias");     break;
                case 5:  console.log("Maio - 31 dias");      break;
                case 6:  console.log("Junho - 30 dias");     break;
                case 7:  console.log("Julho - 31 dias");     break;
                case 8:  console.log("Agosto - 31 dias");    break;
                case 9:  console.log("Setembro - 30 dias");  break;
                case 10: console.log("Outubro - 31 dias");   break;
                case 11: console.log("Novembro - 30 dias");  break;
                case 12: console.log("Dezembro - 31 dias");  break;
            }
            question10();
        }

        if (mes === 2) {
            rl.question("O ano é bissexto? (s/n): ", (resp) => {
                exibirMes(resp.toLowerCase().trim() === "s");
            });
        } else {
            exibirMes();
        }
    });
}

// Questão 10 — Valor a pagar por horas
function question10() {
    rl.question("Digite o número de horas (1-23): ", (resposta) => {
        let horas = parseInt(resposta);

        if (isNaN(horas) || horas < 1 || horas > 23) {
            console.log("Número de horas inválido!");
            rl.close();
            return;
        }

        let valor;

        switch (true) {
            case horas === 1: valor = 8; break;
            case horas === 2: valor = 6; break;
            case horas === 3: valor = 4; break;
            default:          valor = 4 + (horas - 3) * 2; break;
        }

        console.log("Valor a pagar: R$", valor);
        rl.close();
    });
}

question1();