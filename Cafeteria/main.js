
const modal = document.querySelector(".modal")
const mascara_modal = document.querySelector(".mascara_modal")

function clickEndereco(){
    alert("JS ativo!")
    
    modal.style.left = '50%'
    mascara_modal.style.visibility = 'visible'
    
}

function desativaEndereco(){
        
    modal.style.left = '-40%'
    mascara_modal.style.visibility = 'hidden'

}