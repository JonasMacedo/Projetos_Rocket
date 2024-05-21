 
import mongose from 'mongoose';

import { MongoClient } from "mongodb"

const url = "mongodb+srv://jonasmdcarvalho:<familia20>@nerdflix.02mvy2l.mongodb.net/?retryWrites=true&w=majority&appName=NerdFlix"

const client = new MongoClient(url);

async function run() {
    try {
        const database = client.db('NerdFlix')
        console.log('tentado conectar com o Mongo')
    } finally {
     
        await client.close();
    }
 
}

run().catch(console.dir)