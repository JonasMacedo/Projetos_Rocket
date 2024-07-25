import {sql} from "./db.js";

sql`
CREATE TABLE videos (
    title Text,
    description Text,
    duration Integer
);
`.then(()=>{
    console.log('Tabela Criada')
})