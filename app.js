// Cria um array para armazenar os amigos
let amigos = [];

// Seleciona os elementos HTML
let nome = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");

// Atualiza a lista de amigos
function atualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach(function (amigo) {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}

// Adiciona um evento de clique ao botão "Adicionar"
function adicionarAmigo() {
    validaEntrada();
}

// Valida a entrada do usuário
function validaEntrada() {
    if (nome.value == "") {
        alert("Digite um nome válido");
    } else {
        amigos.push(nome.value);
        nome.value = "";
    }
    atualizarLista();
}

// Sortea um amigo da lista
function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Não há amigos para sortear");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let mensagem = document.getElementById("resultado");
    mensagem.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

