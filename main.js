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
    rl.question
}