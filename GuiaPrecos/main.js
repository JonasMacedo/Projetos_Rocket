
const searchForm = document.querySelector('.search_form')

searchForm.addEventListener('submit', async function(event){
    event.preventDefault()
    alert('Submit ativo')
    // console.log(event)
    let inputValue = event.target[0].value


    const dados = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`)
    const products = (await dados.json()).results
    console.log(products)
})
