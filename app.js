//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function atualizarListaAmigos() {
    // Obter o elemento da lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpar a lista existente
    lista.innerHTML = "";
    
    // Percorrer o array amigos
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento de lista
        const li = document.createElement('li');
        li.textContent = amigos[i];
        
        // Adicionar o elemento à lista
        lista.appendChild(li);
    }
}

function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();
    
    // Validar a entrada
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    // Atualizar o array de amigos
    amigos.push(nomeAmigo);
    
    // Limpar o campo de entrada
    input.value = "";
    
    // Atualizar a lista de amigos
    atualizarListaAmigos();
}

function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }
    
    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

