//--------------------------Preencher lista de produtos--------------------------

//Function que preenche os produtos via dom
function preencherListaProdutos() {
    let arrProdutos = [{
        produtoImgSrc: 'assets/img/Men-Jacket-Front-Black__15466 1.png',
        produtoTipo: 'Camisetas',
        produtoTitulo: 'Lightweight Jacket',
        produtoDesc: 'Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...',
        produtoPreco: 'R$ 100.00',
    },
    {
        produtoImgSrc: 'assets/img/image 1.png',
        produtoTipo: 'Acessórios',
        produtoTitulo: 'Black Hat',
        produtoDesc: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...',
        produtoPreco: 'R$ 100.00',
    },
    {
        produtoImgSrc: 'assets/img/Surgical-Mask-Black__89554 1.png',
        produtoTipo: 'Acessórios',
        produtoTitulo: 'Mask',
        produtoDesc: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...',
        produtoPreco: 'R$ 40.00',
    },
    {
        produtoImgSrc: 'assets/img/Men-TShirt-Black-Front__70046 1.png',
        produtoTipo: 'Camisetas',
        produtoTitulo: 'T-Shirt',
        produtoDesc: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
        produtoPreco: 'R$ 100.00',
    },
    {
        produtoImgSrc: 'assets/img/mockup-a0dc2330__62146 1.png',
        produtoTipo: 'Camisetas',
        produtoTitulo: 'Short-Sleeve T-Shirt',
        produtoDesc: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
        produtoPreco: 'R$ 100.00',
    },
    {
        produtoImgSrc: 'assets/img/mockup-9b9894f1__67347 1@2x.png',
        produtoTipo: 'Camisetas',
        produtoTitulo: 'Champion Packable Jacket',
        produtoDesc: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        produtoPreco: 'R$ 100.00',
    },
    {
        produtoImgSrc: 'assets/img/Men-TShirt-Black-Front__70046 1.png',
        produtoTipo: 'Camisetas',
        produtoTitulo: 'T-Shirt',
        produtoDesc: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
        produtoPreco: 'R$ 100.00',
    },
    {
        produtoImgSrc: 'assets/img/mockup-a0dc2330__62146 1.png',
        produtoTipo: 'Camisetas',
        produtoTitulo: 'Short-Sleeve T-Shirt',
        produtoDesc: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
        produtoPreco: 'R$ 100.00',
    },
    {
        produtoImgSrc: 'assets/img/mockup-9b9894f1__67347 1@2x.png',
        produtoTipo: 'Camisetas',
        produtoTitulo: 'Champion Packable Jacket',
        produtoDesc: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        produtoPreco: 'R$ 100.00',
    }]

    const produtos = document.querySelector('.produtos')

    for (let i = 0; i < arrProdutos.length; i++) {
        const div = document.createElement('div')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const div2 = document.createElement('div')
        const p = document.createElement('p')
        const h2 = document.createElement('h2')
        const p2 = document.createElement('p')
        const span = document.createElement('span')
        const a = document.createElement('a')

        div.className = 'produtos-card'
        div2.className = 'produtos-info'
        p.className = 'produtos-tipo'
        h2.className = 'produtos-titulo'
        p2.className = 'produtos-desc'
        span.className = 'produtos-price'
        a.className = 'produtos-add'

        img.src = arrProdutos[i].produtoImgSrc
        p.innerText = arrProdutos[i].produtoTipo
        h2.innerText = arrProdutos[i].produtoTitulo
        p2.innerText = arrProdutos[i].produtoDesc
        span.innerText = arrProdutos[i].produtoPreco
        a.innerText = 'Adicionar ao carrinho'
        a.id = i + 1

        figure.appendChild(img)
        div2.appendChild(p)
        div2.appendChild(h2)
        div2.appendChild(p2)
        div2.appendChild(span)
        div2.appendChild(a)
        div.appendChild(figure)
        div.appendChild(div2)
        produtos.appendChild(div)
    }
}

preencherListaProdutos()

function refreshProdutos() {
    let produtosCard = document.querySelectorAll('.produtos-card')

    for (let i = 0; i < produtosCard.length; i++) {
        let parent = produtosCard[i].parentNode
        parent.removeChild(produtosCard[i])
    }

    preencherListaProdutos()

    adicionarEventoClick()

}

//--------------------------Organizar por categoria--------------------------

//Função que é executada quando uma categoria é clicada

function atualizarIdsProdutos() {
    cards = document.querySelectorAll('.produtos-card')

    for (let i = 0; i < cards.length; i++) {
        let a = cards[i].querySelector('a')
        a.id = i + 1
    }
}
const categoriaClick = function (event) {
    refreshProdutos()

    const tipoCateg = event.target
    let cards = document.querySelectorAll('.produtos-card')
    let tipoProdutos = document.querySelectorAll('.produtos-info .produtos-tipo')

    if (tipoCateg.innerText !== 'Todos') {
        for (let i = 0; i < cards.length; i++) {

            if (tipoProdutos[i].innerText !== tipoCateg.innerText) {
                let parent = cards[i].parentNode
                parent.removeChild(cards[i])
            }

        }

        atualizarIdsProdutos()
    }

    let cardsAfter = document.querySelectorAll('.produtos-card')
    if (cardsAfter.length === 0) {
        let divProdutos = document.querySelector('.produtos')
        divProdutos.className = 'produtos produtos-vazio'

        let pExist = document.querySelectorAll('.sem-produtos')
        if (pExist.length === 0) {
            let p = document.createElement('p')
            p.className = 'sem-produtos'
            p.innerText = 'Nada encontrado'
            divProdutos.appendChild(p)
        }
    }
    else {
        let divProdutos = document.querySelector('.produtos')
        divProdutos.className = 'produtos'

        let p = document.querySelectorAll('.sem-produtos')
        if (p.length > 0) {
            divProdutos.removeChild(p[0])
        }
    }
}

//Pega em um array todas as categorias
const categorias = document.getElementsByTagName('li')

//Faz todas as categorias executar a função quando clicadas
for (let i = 0; i < categorias.length; i++) {
    categorias[i].addEventListener('click', categoriaClick)
}

//--------------------------Atualizações do carrinhp--------------------------

//Contador de itens no carrinho
let carrinhoItens = 0

//Tira o 'carrinho vazio' se houver itens no carrinho, e coloca de volta caso vazio
function verificarCarrinhoVazio() {
    let carrinhoVazioH3 = document.querySelector('.carrinho h3')
    let carrinhoVazioSpan = document.querySelector('.carrinho span')
    let divQuantidade = document.querySelector('.total')
    let carrinho = document.querySelector('.carrinho')

    if (carrinhoItens > 0) {
        carrinhoVazioH3.classList.add('hidden')
        carrinhoVazioSpan.classList.add('hidden')
        carrinho.classList.add('carrinho-block')
        divQuantidade.classList.remove('hidden')

    }
    else {
        carrinhoVazioSpan.classList.remove('hidden')
        carrinhoVazioH3.classList.remove('hidden')
        carrinho.classList.remove('carrinho-block')
        divQuantidade.classList.add('hidden')
    }
}

//Atualiza os botoes removes e os ids deles
let remover = []

function atualizarIdsCarrinho() {

    remover = document.querySelectorAll('.carrinho-produtos-remove')

    for (let i = 0; i < remover.length; i++) {
        remover[i].id = 'carrinho' + i
        remover[i].addEventListener('click', removerClick)
    }
}

function atualizarTotal() {
    //Atualizar preco total
    let produtosCarrinhoPrice = document.querySelectorAll('.carrinho-produtos-price')
    let total = 0

    for (let i = 0; i < produtosCarrinhoPrice.length; i++) {
        total += parseFloat(produtosCarrinhoPrice[i].innerText.slice(3))
    }

    let tagTotal = document.querySelector('#total-preco')
    tagTotal.innerText = 'R$ ' + total

    //Atualizar quantidade
    let produtosCarrinhoQuantidade = document.querySelectorAll('.item-carrinho-produto')
    let tagQuantidade = document.querySelector('#quantidade')
    tagQuantidade.innerText = produtosCarrinhoQuantidade.length
}

//--------------------------Adicionar itens no carrinho--------------------------

//Funcao que adiciona um item no carrinho
function adicionarClick(event) {
    const add = event.target
    const cardNumber = Number(add.id.slice(-1))
    const cards = document.getElementsByClassName('produtos-card')
    let card = []

    for (let i = 0; i < cards.length; i++) {
        if (i === cardNumber - 1) {
            card = cards[i]
            break
        }
    }

    const imgSrc = card.getElementsByTagName('img')[0].currentSrc
    const titleText = card.getElementsByClassName('produtos-titulo')[0].innerText
    const value = card.getElementsByClassName('produtos-price')[0].innerText

    let div = document.createElement('div')
    let figure = document.createElement('figure')
    let img = document.createElement('img')
    let div2 = document.createElement('div')
    let h2 = document.createElement('h2')
    let span = document.createElement('span')
    let a = document.createElement('a')

    div.classList.add('item-carrinho-produto')
    img.classList.add('info-carrinho-produto-img')
    div2.classList.add('item-carrinho-produtos-info')
    h2.classList.add('carrinho-produtos-titulo')
    span.classList.add('carrinho-produtos-price')
    a.classList.add('carrinho-produtos-remove')

    img.src = imgSrc

    h2.innerText = titleText
    span.innerText = value
    a.innerText = 'Remover produto'

    div2.appendChild(h2)
    div2.appendChild(span)
    div2.appendChild(a)
    figure.appendChild(img)
    div.appendChild(figure)
    div.appendChild(div2)

    let carrinho = document.querySelector('.carrinho')
    carrinho.appendChild(div)

    carrinhoItens++

    atualizarIdsCarrinho()

    verificarCarrinhoVazio()

    atualizarTotal()
}

function adicionarEventoClick() {
    //Pega todos os botões de adicionar ao carrinho
    let adicionar = document.querySelectorAll('.produtos-info .produtos-add')

    //Adiciona o evento aos botões de adicionar ao carrinho
    for (let i = 0; i < adicionar.length; i++) {
        adicionar[i].addEventListener('click', adicionarClick)
    }
}

adicionarEventoClick()


//--------------------------Remover itens do carrinho--------------------------

//Remove o item do carrinho
function removerClick(event) {
    let removerIdNumber = event.target
    removerIdNumber = Number(removerIdNumber.id.slice(-1))
    const removerCards = document.querySelectorAll('.item-carrinho-produto')
    let card = []

    for (let i = 0; i < removerCards.length; i++) {
        if (i === removerIdNumber) {
            card = removerCards[i]
            break
        }
    }

    let parent = card.parentNode
    parent.removeChild(card)

    carrinhoItens--

    atualizarIdsCarrinho()

    verificarCarrinhoVazio()

    atualizarTotal()
}

//--------------------------Pesquisar--------------------------

function pesquisar() {

    refreshProdutos()

    const textoPesquisa = document.querySelector('#pesquisar').value.toLowerCase()

    let cards = document.querySelectorAll('.produtos-card')
    for(let i = 0; i < cards.length; i++){
        let tipo = cards[i].querySelector('.produtos-tipo').innerText.toLowerCase()
        let titulo = cards[i].querySelector('.produtos-titulo').innerText.toLowerCase()
        let descricao = cards[i].querySelector('.produtos-desc').innerText.toLowerCase()

        if(tipo.includes(textoPesquisa)){
            
        }
        else if(titulo.includes(textoPesquisa)){
            
        }
        else if(descricao.includes(textoPesquisa)){
            
        }
        else{
            let produtosDiv = document.querySelector('.produtos')
            produtosDiv.removeChild(cards[i])
        }
    }

    atualizarIdsProdutos()
}

let btnPesquisar = document.querySelector('.infoButton')
btnPesquisar.addEventListener('click', pesquisar)