
const searchForm = document.querySelector('.search_form')
const producstList = document.querySelector('.product_list')

searchForm.addEventListener('submit', async function(event){
    event.preventDefault()
    alert('Submit ativo')
    // console.log(event)
    let inputValue = event.target[0].value


    const dados = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`)
    const products = (await dados.json()).results
    // console.log(products)
    
    displayItems(products)
})

function displayItems(products){
    console.log(products)
    producstList.innerHTML = products.map(prod => `
            <div class="product_card">
                <img src="${prod.thumbnail.replace(/\w\.jpg/gi,'W.jpg')}" alt="${prod.title}">
                <h3>"${prod.title}"</h3>
                <p>"${prod.price.toLocaleString('pt-br', {style:"currency", currency:"BRL"})}"</p>
                <p>"${prod.seller.nickname}"</p>
            </div>
        `).join('')
}