
const searchForm = document.querySelector('.search_form')
const producstList = document.querySelector('.product_list')

const priceChart = document.querySelector('.price_chart')

let myChart = ''

searchForm.addEventListener('submit', async function(event){
    event.preventDefault()
    alert('Submit ativo')
    // console.log(event)
    let inputValue = event.target[0].value


    const dados = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`)
    const products = (await dados.json()).results
    // console.log(products)
    
    displayItems(products)
    updatePriceChart(products)
})

function displayItems(products){
    console.log(products)
    producstList.innerHTML = products.map(prod => `
            <div class="product_card">
                <img src="${prod.thumbnail.replace(/\w\.jpg/gi,'W.jpg')}" alt="${prod.title}">
                <h3>"${prod.title}"</h3>
                <p class="product_price">"${prod.price.toLocaleString('pt-br', {style:'currency', currency:'BRL',})}"</p>
                <p>"${prod.seller.nickname}"</p>
            </div>
        `).join('')
}

function updatePriceChart(products) {

    // Estudar melhor a respeito de graficos em https://www.chartjs.org/
    
    const ctx = priceChart.getContext('2d')   
    
    if (myChart) {
        // Verifica se tem informacao, caso tenha reseta para gerar novo grafico. 
        myChart.destroy()
    }
    
    myChart = new Chart(ctx, {
        type:'bar',
        data:{
            labels: products.map(product =>product.title.substring(0,20)+'...'),
            datasets:[{
                label: 'Preço (R$)',
                data: products.map(product => product.price),
                backgroundColor: 'rgba(46, 204, 113, 0.6)' ,
                borderColor: 'rgba(46, 204, 113, 1)' ,
                borderWidth: 1
            }]
        },
        options:{
            responsive: true,
            scale:{
                y:{
                    beginAtZero: true,
                    ticks:{
                        callback : function(value){
                            return ('RS '+ value.toLocaleString('pt-br',{style:'currency', currency: 'BRL',}))
                        }
                    },
                    plugins:{
                        legend:{
                            display: false,
                        },
                        title:{
                            display: true,
                            text: 'Comparador de Preços',
                            font:{
                                size: 18
                            }
                        }
                    }
                }
            }
        }
    })

}
