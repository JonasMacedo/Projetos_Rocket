
function ativaModal(){
    const modal = document.getElementById('janela_modal')
    modal.classList.add('abrir_modal')

    modal.addEventListener('click', (e)=>{ 
        
        // Verifica para realizar fechamento do modal. 
        if(e.target.id == 'fechar' || e.target.id == 'janela_modal'){
            modal.classList.remove('abrir_modal')
        }
    })
}

