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
        this.#videos.values()
    }
    
    
}