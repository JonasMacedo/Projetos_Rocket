import {randomUUID} from "node:crypto"
import { sql } from "./db.js"

export class databasPostgres {
    #videos = new Map()
    
    create(video){
        
    }

    update(id,video){
        
    }
    
    delete(id){
        
    }
    
    list(search){
        
        let videos

        if (search) {
            videos = sql`select * from videos where title ilike "%${search}%"`     
        }else{
            videos = sql`select * from videos where title ilike "%${search}%"`                 
        }

        return videos
    }
    
    
}