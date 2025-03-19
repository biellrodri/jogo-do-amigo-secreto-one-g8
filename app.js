//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    // Validação: Se o campo estiver vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Atualiza a lista de amigos exibida
    exibirListaAmigos();

    // Limpa o campo de entrada
    nomeInput.value = '';
}

// Função para exibir a lista de amigos
function exibirListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar os novos amigos

    amigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione ao menos um amigo para sortear!');
        return;
    }

    // Seleciona um índice aleatório do array de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o amigo sorteado na lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior
    const liResultado = document.createElement('li');
    liResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(liResultado);
}

