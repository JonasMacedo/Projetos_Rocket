// import firebird from 'node-firebird'

const dbOptions = {
    host : '127.0.0.1',
    port : 3050,
    database : 'C:\\ECOSIS\\DADOS\\PAF_RODRIGUES.eco', // caminho do banco na maquina.
    user : 'SYSDBA',
    password : 'masterkey',
    lowercase_keys : false, // set to true to lowercase keys
    role : null,            // default
    pageSize : 4096,        // default when creating database
    pageSize : 4096,        // default when creating database
    retryConnectionInterval : 1000, // reconnect interval in case of connection drop
    blobAsText : false, // set to true to get blob as text, only affects blob subtype 1
    encoding : 'UTF-8', // default encoding for connection is UTF-8
};

const connect = async ()=>{
    const mysql = require('mysql2/promise')
    const conecta = mysql.createConnection("mysql://root:123456789@localhost:3306")
    console.log('conectou ao banco')
}

export{dbOptions}
