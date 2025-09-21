let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.main_container')
let list = document.querySelector('.main_container .list_section')
let cards = document.querySelector('.main_container .cards')

btnNext.onclick = () => movimentaCard('next')
btnBack.onclick = () => movimentaCard('back')

// console.log(list)

function movimentaCard(type) {
    
    // selecionado exatamente o slide e cartao. 
    let list_item = document.querySelectorAll('.main_container .list_item')
    let list_card = document.querySelectorAll('.main_container .card')
    // console.log(list_item)
    // console.log(list_card)

    if(type==='next'){
        list.appendChild(list_item[0])
        cards.appendChild(list_card[0])
        /* o appendChild usado para adicionar um elemento dentro de outro na estrutura de uma página (o DOM).
        o elemnto adicionado pelo appendChild SEMPRE sera adicionado ao final do conteudo já existente. */

        container.classList.add('next')
        
    }else{
        list.prepend(list_item[list_item.length -1])
        cards.prepend(list_card[list_card.length -1])
        // O metodo prepend é parecido com o appendChild, mas em vez de colocar o conteúdo no final de um elemento, ele coloca no começo.
        
        container.classList.add('back')
    }
    
    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
        
    }, 2750);

}

