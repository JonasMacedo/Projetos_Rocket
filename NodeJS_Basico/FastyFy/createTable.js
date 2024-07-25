import {sql} from "./db.js";

/* Descomentar APENAS se for necessario deletar a tabela toda!
sql`DROP TABLE IF EXISTS VIDEOS`.then(()=>{
    console.log('Removida a tabela')
})
*/

sql`
CREATE TABLE videos (
    id Text PRIMARY KEY,
    title Text,
    description Text,
    duration Integer
);
`.then(()=>{
    console.log('Tabela Criada')
})