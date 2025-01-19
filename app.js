// Cria um array para armazenar os amigos
let amigos = [];

// Seleciona os elementos HTML
let nome = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");

// Atualiza a lista de amigos
function atualizarLista() {
    listaAmigos.innerHTML = "";
    /// Adiciona cada amigo à lista
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
    // Verifica se o campo de entrada está vazio
    if (nome.value == "") {
        alert("Digite um nome no campo!");
    } else {
        amigos.push(nome.value);
        nome.value = "";
    }
    atualizarLista();
}

// Sortea um amigo da lista
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length == 0) {
        alert("Não há amigos para sortear!");
        return;
    }
    // Sorteia um amigo da lista
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let mensagem = document.getElementById("resultado");
    mensagem.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

