import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function separador(num) {
    console.log("\n" + "=".repeat(50));
    console.log(`QUESTÃO ${num}`);
    console.log("=".repeat(50) + "\n");
}

function aguardarEnter(callback) {
    rl.question("\nPressione Enter para continuar...", () => {
        callback();
    });
}

// Questão 1 — Objeto produto
function question1() {
    separador(1);

    const produto = {
        nome: "Notebook",
        preco: 3000,
        categoria: "Eletrônicos",
        quantidade: 15,
    };

    for (let chave in produto) {
        console.log(`${chave}: ${produto[chave]}`);
    }

    produto.desconto = 0.1;

    console.log(`Desconto aplicado: ${produto.preco * produto.desconto}`);
    console.log(`Preço final: ${produto.preco - (produto.preco * produto.desconto)}`);

    aguardarEnter(question2);
}

// Questão 2 — Comparação de personagens
function question2() {
    separador(2);

    const personagem1 = {
        nome: "Pedro",
        vida: 100,
        ataque: 35,
        defesa: 50,
    }

    const personagem2 = {
        nome: "Jaques",
        vida: 150,
        ataque: 15,
        defesa: 100
    };

    for (let chave in personagem1) {
        console.log(`${chave}: ${personagem1[chave]}`);
    }

    for (let chave in personagem2) {
        console.log(`${chave}: ${personagem2[chave]}`);
    }

    let Poderpersonagem1 = personagem1.vida + personagem1.ataque + personagem1.defesa
    let Poderpersonagem2 = personagem2.vida + personagem2.ataque + personagem2.defesa

    if (Poderpersonagem1 > Poderpersonagem2) {
        console.log("Personagem 1 venceu")
    } else if (Poderpersonagem2 > Poderpersonagem1) {
        console.log("Personagem 2 venceu")
    } else {
        console.log("Empate")
    }

    aguardarEnter(question3);
}

// Questão 3 — Bônus de funcionário
function question3() {
    separador(3);

    const funcionario = {
        nome: "Pedro",
        cargo: "Analista de sistema",
        salario: 5000,
        tempoExperiencia: 10,
    };

    for (let chave in funcionario) {
        console.log(`${chave}: ${funcionario[chave]}`);
    }

    let bonus;

    if (funcionario.tempoExperiencia <= 2) {
        bonus = funcionario.salario * 0.05
    } else if (funcionario.tempoExperiencia >= 3 && funcionario.tempoExperiencia <= 5) {
        bonus = funcionario.salario * 0.10
    } else {
        bonus = funcionario.salario * 0.15
    }

    console.log(`Seu salário é ${funcionario.salario} e seu bônus é ${bonus}`);

    question4();
}

// Questão 4 — Inventário do jogador
function question4() {
    separador(4);

    const inventario = { espada: 1, poção: 5, escudo: 2 };

    console.log("=== INVENTÁRIO ===");
    for (let chave in inventario) {
        console.log(`${chave}: ${inventario[chave]}`);
    }

    rl.question("\nDigite o nome do item para usar: ", (item) => {
        if (inventario[item] === undefined) {
            console.log("Item não encontrado no inventário.");
        } else if (inventario[item] <= 0) {
            console.log("Item esgotado!");
        } else {
            inventario[item]--;
            console.log(`Você usou 1 ${item}. Quantidade restante: ${inventario[item]}`);
        }

        console.log("\nInventário atualizado:");
        for (let chave in inventario) {
            console.log(`${chave}: ${inventario[chave]}`);
        }

        aguardarEnter(question5);
    });
}

// Questão 5 — Orçamento mensal
function question5() {
    separador(5);

    const orcamento = {
        alimentacao: { planejado: 800, gasto: 750 },
        transporte: { planejado: 400, gasto: 450 },
        lazer: { planejado: 300, gasto: 200 },
        saude: { planejado: 500, gasto: 600 },
    };

    let saldoGeral = 0;

    console.log("=== ORÇAMENTO MENSAL ===");
    for (let categoria in orcamento) {
        const { planejado, gasto } = orcamento[categoria];
        const saldo = planejado - gasto;
        saldoGeral += saldo;

        if (gasto <= planejado) {
            console.log(`${categoria}: dentro do orçamento (gasto: R$${gasto}, planejado: R$${planejado}, saldo: R$${saldo})`);
        } else {
            console.log(`${categoria}: ACIMA do orçamento (gasto: R$${gasto}, planejado: R$${planejado}, saldo: R$${saldo})`);
        }
    }

    console.log(`Saldo geral do mês: R$${saldoGeral}`);

    aguardarEnter(question6);
}

// Questão 6 — Lista de músicas
function question6() {
    separador(6);

    const musicas = [
        { titulo: "Bohemian Rhapsody", artista: "Queen", duracao: 354 },
        { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracao: 482 },
        { titulo: "Imagine", artista: "John Lennon", duracao: 187 },
        { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracao: 301 },
    ];

    console.log("=== PLAYLIST ===");
    for (const musica of musicas) {
        const minutos = Math.floor(musica.duracao / 60);
        const segundos = musica.duracao % 60;
        console.log(`${musica.artista} — ${musica.titulo} (${minutos}:${segundos.toString().padStart(2, "0")})`);
    }

    let totalSegundos = 0;
    musicas.forEach((musica) => {
        totalSegundos += musica.duracao;
    });

    const totalMin = Math.floor(totalSegundos / 60);
    const totalSec = totalSegundos % 60;
    console.log(`Duração total: ${totalMin}:${totalSec.toString().padStart(2, "0")}`);

    aguardarEnter(question7);
}

// Questão 7 — Notas de alunos
function question7() {
    separador(7);

    const alunos = [
        { nome: "Ana", nota: 8.5 },
        { nome: "Bruno", nota: 4.0 },
        { nome: "Carlos", nota: 6.0 },
        { nome: "Diana", nota: 9.0 },
        { nome: "Eduardo", nota: 3.5 },
        { nome: "Fernanda", nota: 7.5 },
    ];

    console.log("=== CLASSIFICAÇÃO DOS ALUNOS ===");
    for (const aluno of alunos) {
        let classificacao;
        if (aluno.nota >= 7) {
            classificacao = "Aprovado";
        } else if (aluno.nota >= 5) {
            classificacao = "Recuperação";
        } else {
            classificacao = "Reprovado";
        }
        console.log(`${aluno.nome}: ${aluno.nota} — ${classificacao}`);
    }

    let somaAprovados = 0;
    let countAprovados = 0;
    let somaReprovados = 0;
    let countReprovados = 0;

    alunos.forEach((aluno) => {
        if (aluno.nota >= 7) {
            somaAprovados += aluno.nota;
            countAprovados++;
        } else if (aluno.nota < 5) {
            somaReprovados += aluno.nota;
            countReprovados++;
        }
    });

    if (countAprovados > 0) {
        console.log(`Média dos aprovados: ${(somaAprovados / countAprovados).toFixed(2)}`);
    }
    if (countReprovados > 0) {
        console.log(`Média dos reprovados: ${(somaReprovados / countReprovados).toFixed(2)}`);
    }

    aguardarEnter(question8);
}

// Questão 8 — Valor total em estoque
function question8() {
    separador(8);

    const produtos = [
        { nome: "Camiseta", preco: 50, quantidade: 20 },
        { nome: "Calça Jeans", preco: 150, quantidade: 10 },
        { nome: "Tênis", preco: 200, quantidade: 8 },
        { nome: "Boné", preco: 35, quantidade: 30 },
    ];

    let totalGeral = 0;

    console.log("=== RELATÓRIO DE ESTOQUE ===");
    produtos.forEach((produto) => {
        const valorTotal = produto.preco * produto.quantidade;
        totalGeral += valorTotal;
        console.log(`${produto.nome}: R$${produto.preco} x ${produto.quantidade} = R$${valorTotal}`);
    });

    console.log(`Valor total geral do estoque: R$${totalGeral}`);

    question9();
}

// Questão 9 — Agenda de contatos
function question9() {
    separador(9);

    const contatos = [
        { nome: "Maria", telefone: "(11) 99999-1111", email: "maria@email.com" },
        { nome: "João", telefone: "(21) 98888-2222", email: "joao@email.com" },
        { nome: "Pedro", telefone: "(31) 97777-3333", email: "pedro@email.com" },
        { nome: "Lucia", telefone: "(41) 96666-4444", email: "lucia@email.com" },
    ];

    console.log("=== CONTATOS ===");
    contatos.forEach((contato) => {
        console.log(`Nome: ${contato.nome} | Tel: ${contato.telefone} | Email: ${contato.email}`);
    });

    rl.question("\nDigite o nome para buscar: ", (busca) => {
        let encontrado = false;
        for (const contato of contatos) {
            if (contato.nome.toLowerCase() === busca.toLowerCase()) {
                console.log(`\nContato encontrado:`);
                console.log(`Nome: ${contato.nome} | Tel: ${contato.telefone} | Email: ${contato.email}`);
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            console.log("Contato não encontrado.");
        }

        aguardarEnter(question10);
    });
}

// Questão 10 — Pilha (histórico do navegador)
function question10() {
    separador(10);

    const historico = [];

    function visitar(pagina) {
        historico.push(pagina);
        console.log(`Visitando: ${pagina}`);
    }

    function voltar() {
        if (historico.length === 0) {
            console.log("Histórico vazio, não há página para voltar.");
            return null;
        }
        const pagina = historico.pop();
        console.log(`Voltando de: ${pagina}`);
        return pagina;
    }

    function paginaAtual() {
        if (historico.length === 0) {
            console.log("Nenhuma página aberta.");
            return null;
        }
        const pagina = historico[historico.length - 1];
        console.log(`Página atual: ${pagina}`);
        return pagina;
    }

    console.log("=== NAVEGADOR (PILHA) ===");
    visitar("google.com");
    visitar("github.com");
    visitar("stackoverflow.com");
    visitar("medium.com");

    voltar();
    paginaAtual();

    voltar();
    paginaAtual();

    aguardarEnter(question11);
}

// Questão 11 — Fila (atendimento clínica)
function question11() {
    separador(11);

    const fila = [];

    function chegarPaciente(nome) {
        fila.push(nome);
        console.log(`${nome} chegou à fila.`);
    }

    function chamarProximo() {
        if (fila.length === 0) {
            console.log("Nenhum paciente na fila.");
            return null;
        }
        const paciente = fila.shift();
        console.log(`Chamando: ${paciente}`);
        return paciente;
    }

    function exibirFila() {
        console.log(`Fila atual: [${fila.join(", ")}]`);
    }

    console.log("=== FILA DA CLÍNICA ===");
    chegarPaciente("Alice");
    exibirFila();
    chegarPaciente("Bruno");
    exibirFila();
    chegarPaciente("Carlos");
    exibirFila();
    chegarPaciente("Diana");
    exibirFila();
    chegarPaciente("Eduardo");
    exibirFila();

    chamarProximo();
    exibirFila();
    chamarProximo();
    exibirFila();
    chamarProximo();
    exibirFila();

    aguardarEnter(question12);
}

// Questão 12 — Lista ligada (gerenciador de tarefas)
function question12() {
    separador(12);

    let cabeca = null;

    function adicionar(tarefa) {
        const novoNo = { valor: tarefa, proximo: null };
        if (cabeca === null) {
            cabeca = novoNo;
        } else {
            let atual = cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
        console.log(`Tarefa adicionada: ${tarefa}`);
    }

    function remover(tarefa) {
        if (cabeca === null) {
            console.log("Lista vazia.");
            return;
        }
        if (cabeca.valor === tarefa) {
            cabeca = cabeca.proximo;
            console.log(`Tarefa removida: ${tarefa}`);
            return;
        }
        let atual = cabeca;
        while (atual.proximo !== null) {
            if (atual.proximo.valor === tarefa) {
                atual.proximo = atual.proximo.proximo;
                console.log(`Tarefa removida: ${tarefa}`);
                return;
            }
            atual = atual.proximo;
        }
        console.log(`Tarefa "${tarefa}" não encontrada.`);
    }

    function exibir() {
        if (cabeca === null) {
            console.log("Lista vazia.");
            return;
        }
        let atual = cabeca;
        let lista = [];
        while (atual !== null) {
            lista.push(atual.valor);
            atual = atual.proximo;
        }
        console.log(`Tarefas: [${lista.join(" → ")}]`);
    }

    console.log("=== GERENCIADOR DE TAREFAS (LISTA LIGADA) ===");
    adicionar("Estudar JavaScript");
    adicionar("Fazer exercícios");
    adicionar("Revisar código");
    adicionar("Entregar projeto");

    console.log("\nLista de tarefas:");
    exibir();

    remover("Fazer exercícios");

    console.log("\nLista após remoção:");
    exibir();

    console.log("\n" + "=".repeat(50));
    console.log("FIM DAS QUESTÕES");
    console.log("=".repeat(50));

    rl.close();
}

question1();