
/* 
    Esta configuração salvará as informações localmente na maquina.
    Ao reiniciar a maquina ou a aplicação, os dados serao resetados.
*/

import {randomUUID} from "node:crypto"

export class databaseMoemory {
    #videos = new Map()
    
    create(video){
        const videoId = randomUUID() // funcao do NodeJS para gerar Id unico.
        this.#videos.set(videoId, video)
    }

    update(id,video){
        this.#videos.set(id, video)
    }
    
    delete(id){
        this.#videos.delete(id)
    }
    
    list(){
       
       // return Array.from(this.#videos.values()) //Convertendo o VALUES em um Array.
        
       return Array.from(this.#videos.entries()).map((videoArrey)=>{

        //Convertendo o VALUES em um Array.
        const id = videoArrey[0]
        const data = videoArrey[1]
        return {
            id,
            ...data,
        }
       })
    }
    
    
}