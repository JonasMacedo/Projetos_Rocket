
const btnWantMore = document.querySelector('.wantMore');
const projetoInativos = document.querySelectorAll('.project:not(active)') // para buscar todos os elementos inativos
//const projetoInativos = document.querySelectorAll('.project')

console.log(projetoInativos);

btnWantMore.addEventListener('click', ()=>{
    
    mostrarMaisProjetos();
    esconderBotao();  
})

function mostrarMaisProjetos(){
    projetoInativos.forEach(proj => {
        // console.log(proj)
        proj.classList.remove('project')
        proj.classList.add('project_active')
    })
}

function esconderBotao(){
    btnWantMore.classList.remove('wantMore')
    btnWantMore.classList.add('remover')
}
