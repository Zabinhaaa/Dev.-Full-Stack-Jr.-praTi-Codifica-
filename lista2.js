import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// QUESTÃO 1 — Tabuada com laço for + repetição com recursão
function question1() {
    rl.question("Digite um número: ", (numero) => {
        numero = parseInt(numero);

        for (let i = 1; i <= 10; i++) {
            console.log(numero + " x " + i + " = " + (numero * i));
        }

        rl.question("Deseja ver outra tabuada? (sim/não): ", (resp) => {
            if (resp.trim().toLowerCase() === "sim") {
                question1();
            } else {
                question2();
            }
        });
    });
}

// QUESTÃO 2 — Contar dígitos com laço while
function question2() {
    rl.question("Digite um número inteiro positivo: ", (input) => {
        let n = parseInt(input);
        let contador = 0;

        if (n === 0) {
            contador = 1;
        } else {
            let temp = n;
            while (temp > 0) {
                temp = Math.floor(temp / 10);
                contador++;
            }
        }

        console.log(`Quantidade de dígitos: ${contador}`);
        question3();
    });
}

// QUESTÃO 3 — Sequência de Fibonacci com laço for
function question3() {
    rl.question("Quantos termos de Fibonacci você deseja ver? ", (input) => {
        let n = parseInt(input);
        let a = 0, b = 1;

        console.log("Sequência de Fibonacci:");
        for (let i = 0; i < n; i++) {
            console.log(a);
            let temp = a + b;
            a = b;
            b = temp;
        }

        question4();
    });
}

// QUESTÃO 4 — Validação de senha com recursão (máximo 3 tentativas)
function question4() {
    const senha = "123456";
    let tentativas = 0;

    function tentarSenha() {
        rl.question("Digite a senha: ", (input) => {
            tentativas++;

            if (input === senha) {
                console.log("✓ Senha correta!");
                question5();
                return;
            } else {
                if (tentativas < 3) {
                    console.log(`✗ Senha incorreta. Tentativas restantes: ${3 - tentativas}`);
                    tentarSenha();
                } else {
                    console.log("✗ Número máximo de tentativas atingido!");
                    question5();
                }
            }
        });
    }

    tentarSenha();
}

// QUESTÃO 5 — Números primos com laços aninhados (for dentro de for)
function question5() {
    rl.question("Digite um número N: ", (input) => {
        let n = parseInt(input);
        let contador = 0;

        console.log("Números primos entre 2 e " + n + ":");
        for (let i = 2; i <= n; i++) {
            let primo = true;

            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    primo = false;
                    break;
                }
            }

            if (primo) {
                console.log(i);
                contador++;
            }
        }
        console.log("Quantidade total de primos encontrados: " + contador);
        question6();
    });
}

// QUESTÃO 6 — Array com nomes e notas: média, maior e menor nota
function question6() {
    const nomes = [];
    const notas = [];

    function lerAluno(i) {
        if (i === 5) {
            let soma = 0;
            for (let j = 0; j < notas.length; j++) {
                soma += notas[j];
            }
            let media = soma / notas.length;
            console.log("\n=== RESULTADO ===");
            console.log("Média da turma: " + media.toFixed(2));

            let maiorNota = notas[0];
            let maiorNome = nomes[0];
            for (let k = 1; k < 5; k++) {
                if (notas[k] > maiorNota) {
                    maiorNota = notas[k];
                    maiorNome = nomes[k];
                }
            }
            console.log("Maior nota: " + maiorNota + " - Aluno: " + maiorNome);

            let menorNota = notas[0];
            let menorNome = nomes[0];
            for (let m = 1; m < 5; m++) {
                if (notas[m] < menorNota) {
                    menorNota = notas[m];
                    menorNome = nomes[m];
                }
            }
            console.log("Menor nota: " + menorNota + " - Aluno: " + menorNome);

            question7();
            return;
        }

        rl.question(`Nome do aluno ${i + 1}: `, (nome) => {
            rl.question(`Nota do aluno ${i + 1}: `, (nota) => {
                nomes.push(nome);
                notas.push(parseFloat(nota));
                lerAluno(i + 1);
            });
        });
    }

    lerAluno(0);
}

// QUESTÃO 7 — Carrinho de compras: produtos, preços, desconto condicional
function question7() {
    const produtos = [];
    const precos = [];

    function lerProduto() {
        rl.question("Nome do produto (ou 'sair' para finalizar): ", (nome) => {
            if (nome.toLowerCase() === "sair") {
                let subtotal = 0;

                console.log("\n=== CARRINHO DE COMPRAS ===");
                for (let i = 0; i < precos.length; i++) {
                    console.log((i + 1) + ". " + produtos[i] + " - R$ " + precos[i].toFixed(2));
                    subtotal += precos[i];
                }
                console.log("Subtotal: R$ " + subtotal.toFixed(2));

                let total = subtotal;
                if (produtos.length > 3) {
                    let desconto = subtotal * 0.1;
                    total = subtotal - desconto;
                    console.log("Desconto de 10%: -R$ " + desconto.toFixed(2));
                }

                console.log("Total a pagar: R$ " + total.toFixed(2));
                question8();
                return;

            } else {
                rl.question("Preço do produto: ", (preco) => {
                    produtos.push(nome);
                    precos.push(parseFloat(preco));
                    lerProduto();
                });
            }
        });
    }

    lerProduto();
}

// QUESTÃO 8 — Palavra invertida + verificação de palíndromo
function question8() {
    rl.question("Digite uma palavra: ", (input) => {
        let palavra = input.trim().toLowerCase();
        let letras = palavra.split('');
        let invertida = "";

        for (let i = letras.length - 1; i >= 0; i--) {
            invertida += letras[i];
        }

        console.log("Palavra original: " + palavra);
        console.log("Palavra invertida: " + invertida);

        if (palavra === invertida) {
            console.log("É um PALÍNDROMO! ✓");
        } else {
            console.log("Não é um palíndromo.");
        }

        question9();
    });
}

// QUESTÃO 9 — Jogo de adivinhação com Math.random() + recursão
function question9() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const tentativas = [];

    console.log("\n=== ADIVINHE O NÚMERO (1-100) ===");

    function adivinhar() {
        rl.question("Digite seu chute: ", (input) => {
            let chute = parseInt(input);
            tentativas.push(chute);

            if (chute < numeroSecreto) {
                console.log("→ O número é MAIOR!");
                adivinhar();
            } else if (chute > numeroSecreto) {
                console.log("→ O número é MENOR!");
                adivinhar();
            } else {
                console.log("✓ Você ACERTOU!");

                console.log("\n=== HISTÓRICO DE TENTATIVAS ===");
                for (let i = 0; i < tentativas.length; i++) {
                    console.log(`Tentativa ${i + 1}: ${tentativas[i]}`);
                }
                console.log(`Total de tentativas: ${tentativas.length}`);

                question10();
            }
        });
    }

    adivinhar();
}

// QUESTÃO 10 — Matriz 3×4: média por aluno, média geral, melhor desempenho
function question10() {
    const matriz = [];

    function lerNota(i, j) {
        if (i === 3) {
            console.log("\n=== RESULTADO FINAL ===");
            let somaGeral = 0;
            let melhorAluno = 0;
            let melhorMedia = 0;

            for (let a = 0; a < 3; a++) {
                let soma = 0;
                for (let b = 0; b < 4; b++) {
                    soma += matriz[a][b];
                }
                let media = soma / 4;
                console.log(`Aluno ${a + 1} - Média: ${media.toFixed(2)}`);
                somaGeral += media;

                if (media > melhorMedia) {
                    melhorMedia = media;
                    melhorAluno = a;
                }
            }

            console.log("Média geral da turma: " + (somaGeral / 3).toFixed(2));
            console.log(`Melhor desempenho: Aluno ${melhorAluno + 1} com média ${melhorMedia.toFixed(2)}`);

            rl.close();
            return;
        }

        if (j === 0) matriz.push([]);

        rl.question(`Aluno ${i + 1}, Nota ${j + 1}: `, (input) => {
            matriz[i].push(parseFloat(input));

            if (j === 3) {
                lerNota(i + 1, 0);
            } else {
                lerNota(i, j + 1);
            }
        });
    }

    lerNota(0, 0);
}

question1();