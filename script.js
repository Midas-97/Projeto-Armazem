// selecionando elentos do DOM
const nomeInput = document.getElementById("nome");
const quantidadeInput = document.getElementById("quantidade");
const fotoInput = document.getElementById("foto");
const adicionarBtn = document.getElementById("adicionar-btn");
const listaProdutos = document.getElementById("lista-produtos");

// Evento para adicionar um novo produto
adicionarBtn.addEventListener("click", () => {
    const nome = nomeInput.value.trim();
    const quantidade = parseInt(quantidadeInput.value);
    const foto = fotoInput.value.trim();

    console.log("Tentando adicionar produto:", { nome, quantidade, foto });

    // Verificar se os campos estão preenchidos corretamente
    if (nome && quantidade > 0 && foto) {
        adicionarProduto (nome, quantidade, foto);

    // Limpar os camps após adicionar o produto
    nomeInput.value = "";
        quantidadeInput.value = "";
        fotoInput.value = "";
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

// Função para adicionar produto á lista
function adicionarProduto(nome, quantidade, foto) {
    console.log("Adicionando produto:", { nome, quantidade, foto });
    
    // Criando o elemento do produto
    const produtoItem = document.createElement("div");
    produtoItem.classList.add("produto-item");

    // Adicionar a imagem
    const img = document.createElement("img");
    img.src = foto;
    img.alt = nome;
    produtoItem.appendChild(img);

    // Informações do produto (nome e quantidade)
    const produtoInfo = document.createElement("div");
    produtoInfo.classList.add("produto-info");

    const nomeProduto = document.createElement("p");
    nomeProduto.textContent = nome;
    produtoInfo.appendChild(nomeProduto);

    const quantidadeProduto = document.createElement("p");
    quantidadeProduto.textContent = `Quantidade: ${quantidade}`;
    produtoInfo.appendChild(quantidadeProduto);

    produtoItem.appendChild(produtoInfo);

    // Botão para reduzir a quantidade
    const botaoSair = document.createElement("button");
    botaoSair.classList.add("botao-sair");
    botaoSair.textContent = "-";
    botaoSair.addEventListener("click", () => {
        if (quantidade > 1) {
            quantidade--;
            quantidadeProduto.textContent = `Quantidade: ${quantidade}`;
        } else {
            alert("A quantidade não pode ser menor que 1.");
        }
    });
    produtoItem.appendChild(botaoSair);

    // Botão para excluir o produto
    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", () => {
        listaProdutos.removeChild(produtoItem);
    });
    produtoItem.appendChild(botaoExcluir);

    // Adicionando o produto à lista de produtos
    listaProdutos.appendChild(produtoItem);

}