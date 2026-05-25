import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question1() {

    rl.question("Digite a nota do aluno: ", (resposta) => {
    
        let nota = parseFloat(resposta);

        if (nota >= 7) {
            console.log("aprovado");
       } else if (nota >= 5 && nota <= 6.9) {
            console.log("recuperação");
       } else {
       
            console.log("reprovado");
       } 

       question2();
    });
}

function question2() {

    rl.question("Digite o ano de nascimento: ", (resposta) => {

        let anoNascimento = parseInt(resposta);
        let anoAtual = new Date().getFullYear();
        let idade = anoAtual - anoNascimento;

        if (idade <= 12) {
            console.log("criança");
        } else if (idade >= 13 && idade <= 17) {
            console.log("adolescente");
        } else if (idade >= 18 && idade <= 59) {
            console.log("adulto");
        } else {
            console.log("idoso");

        }

        question3();

    });

}

function  question3() {
    rl.question("Digite quanto você ganha por mês: ", (resposta) => {
        let salario = parseFloat(resposta);

        rl.question("Digite o porcentual de aumento: ", (resposta) => {
            let aumento = parseFloat(resposta);

            if (salario < 1500) {
                aumento = aumento *2; 

            }

            let novoSalario = salario + salario * aumento / 100;
            console.log("Novo salário: R$ ", novoSalario);

            question4();
        });
    });
}

function question4() {
    rl.question("Digite o primeiro número:", (resposta) => {
        let num1 = parseFloat(resposta);

        rl.question("Digite o segundo número:", (resposta) => {
            let num2 = parseFloat(resposta);

            rl.question("Digite o terceiro número", (resposta) => {
                let num3 = parseFloat(resposta);

                let maior = num1;

                if (num2 > maior) {
                    maior = num2 
                }
                if (num3 > maior) {
                    maior = num3
                }

                console.log("O maior número é: ", maior);
                
                question5();
            });
        });
    });
}

function question5() {
    rl.question("Valor total da compra", (resposta) => {
        let valorcompra = parseFloat(resposta);

        let descontoporcentagem;

        if (valorcompra < 100) {
            descontoporcentagem = 0;
        } else if (valorcompra >= 100 && valorcompra <= 299.99) {
            descontoporcentagem = 10;
        } else if (valorcompra >=300 && valorcompra <= 499.99) {
            descontoporcentagem = 15;
        } else { 
            descontoporcentagem = 20;
        }

        let valorDesconto = valorcompra * descontoporcentagem / 100;
        let valorFinal = valorcompra - valorDesconto;

        console.log("valor total da compra: R$", valorcompra);
        console.log("Valor do desconto: R$", valorDesconto);
        console.log("Valor a pagar: R$", valorFinal);

        question6();
    });
}

function question6() {
    rl.question("Que valor deseja sacar?", (resposta) => {
        let valorSaque = parseInt(resposta);

        if (valorSaque % 10 !== 0) {
            console.log("Digite um valor múltiplo de 10");
            rl.close();
            return;
        }

        let cedulas100 = parseInt(valorSaque / 100);
            valorSaque = valorSaque % 100;

        let cedulas50 = parseInt(valorSaque / 50);
            valorSaque = valorSaque % 50;

        let cedulas20 = parseInt(valorSaque / 20);
            valorSaque = valorSaque % 20;

        let cedulas10 = parseInt(valorSaque / 10);
            valorSaque = valorSaque % 10;
            
        console.log("Cédulas de R$ 100:", cedulas100)
        console.log("Cédulas de R$ 50:", cedulas50)
        console.log("Cédulas de R$ 20:", cedulas20)
        console.log("Cédulas de R$ 10:", cedulas10)

        question7();
    });
}

function question7() {
    rl.question("DIgite o primeiro número", (resposta) => {
        let numero1 = parseFloat(resposta);

        rl.question("Digite o segundo número",(resposta) => {
            let numero2 = parseFloat(resposta);

            rl.question("Digite a operação (+, -, *, /):", (resposta) => {
                console.log(resposta);
                let operacao = resposta 
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
                        console.log("operação inválida");
                }
                        
                question8();

            });
        });
    });
}

function question8() {
    rl.question("Digite o tamanho da pizza (P, M, G): ", (resposta) => {
        let tamanho = resposta.toUpperCase();

        let precoBase;

        switch (tamanho) {
            case "P":
            precoBase = "R$ 25";
            break;

        case "M":
            precoBase = "R$ 35";
            break;

        case "G":
            precoBase = "R$ 45";
            break;

        default:
            console.log("Tamanho inválido!");
            rl.close  
            return;
        }

        rl.question("Digite o tipo de borda (Tradicional ou recheada):", (resposta) => {
            let borda = resposta.toLowerCase();

        let valorBorda;

        if (borda === "tradicional") {
                valorBorda = "R$ 0";
        } else if (borda === "recheada") {
            valorBorda = "R$ 10";
        } else {
            console.log("Tipo de borda inválida!");
            rl.close();
            return;
        }

        let valorFinal = precoBase + valorBorda;
        console.log("valor final da pizza: R$", valorFinal);
        
       });
   });
}