//Arr de produtos
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
}]

//Verifica se não achou nenhum produto
function produtosVazio(){
    let cardsAfter = document.querySelectorAll('.produtos-card')
    
    
    if (cardsAfter.length > 0) {
        let divProdutos = document.querySelector('.produtos')
        divProdutos.className = 'produtos'

        let p = document.querySelectorAll('.sem-produtos')
        if (p.length > 0) {
            divProdutos.removeChild(p[0])
        }
        
    }
    else {
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
}

//Carrega todos os produtos
function carregaTodosProdutos() {
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
    produtosVazio()
}

carregaTodosProdutos()

//Carrega um produto pelo indice
function carregaProduto(i) {
    const produtos = document.querySelector('.produtos')

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

//Preenche os produtos via dom
function preencherListaProdutos(text, origem) {
    if (origem === 'categoria') {
        for (let i = 0; i < arrProdutos.length; i++) {
            if (arrProdutos[i].produtoTipo.includes(text)) {
                carregaProduto(i)
            }
        }
        produtosVazio()
    }
    else if (origem === 'pesquisa') {
        for (let i = 0; i < arrProdutos.length; i++) {
            let produtoDesc = arrProdutos[i].produtoDesc.toLowerCase()
            let produtoTitulo = arrProdutos[i].produtoTitulo.toLowerCase()
            let produtoTipo = arrProdutos[i].produtoTipo.toLowerCase()
            console.log()

            if (produtoDesc.includes(text) || produtoTitulo.includes(text) || produtoTipo.includes(text)) {
                carregaProduto(i)
            }
        }
        produtosVazio()
    }
}

//Deleta todos os itens carregados
function deletarProdutosCarregados() {
    let cards = document.querySelectorAll('.produtos-card')
    

    for (let i = 0; i < cards.length; i++) {
        let parent = cards[i].parentNode
        parent.removeChild(cards[i])
    }

}

//Pesquisa por categoria
function pesquisaCategoria(event) {
    if (event.target.tagName === 'A') {
        deletarProdutosCarregados()

        let text = event.target.innerText
        if (text === 'Todos') {
            carregaTodosProdutos()
        }
        else {
            preencherListaProdutos(text, 'categoria')
        }
    }
}

//Pesquisa por texto
function pesquisaTexto(event) {
    if (event.target.className === 'infoButton') {
        let text = event.target.parentNode.getElementsByClassName('infoText')[0].value.toLowerCase()
        deletarProdutosCarregados()
        preencherListaProdutos(text, 'pesquisa')
    }
}

//Verifica se o carrinho esta vazio ou não
function verificarCarrinhoVazio() {
    let carrinhoVazioH3 = document.querySelector('.carrinho h3')
    let carrinhoVazioSpan = document.querySelector('.carrinho span')
    let divQuantidade = document.querySelector('.total')
    let carrinho = document.querySelector('.carrinho')

    if (itensCarrinho > 0) {
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

//Itens dentro do carrinho
let itensCarrinho = 0
//Adicionar item no carrinho
function adicionaItemCarrinho(event) {
    if (event.target.tagName === 'A') {
        const card = event.target.parentNode.parentNode
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

        itensCarrinho++

        verificarCarrinhoVazio()
        atualizarTotal()
    }
}

//Remove item do carrinho
function removerItemCarrinho(event) {
    if (event.target.tagName === 'A') {
        let carrinho = document.querySelector('.carrinho')
        let card = event.target.parentNode.parentNode

        carrinho.removeChild(card)

        itensCarrinho--

        verificarCarrinhoVazio()
        atualizarTotal()
    }
}

//Atualiza o preco total e quantidade
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

//Evento de pesquisar por categoria
let categoria = document.querySelector('header nav ul')
categoria.addEventListener('click', pesquisaCategoria)

//Evento de pesquisar por texto
let pesquisa = document.querySelector('.info-pesquisar')
pesquisa = addEventListener('click', pesquisaTexto)

//Evento de adicionar item no carrinho
let produtos = document.querySelector('.produtos')
produtos.addEventListener('click', adicionaItemCarrinho)

//Evento de remover item do carrinho
let carrinho = document.querySelector('.carrinho')
carrinho.addEventListener('click', removerItemCarrinho)