import 'dotenv/config' 
import postgres from 'postgres'


let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
PGPASSWORD = decodeURIComponent(PGPASSWORD);
let URL = `postgressql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`

export const sql = postgres(URL, {ssl: 'require'})
