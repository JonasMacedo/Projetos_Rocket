
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

const connect = async ()=>{ // conectando com o banco MySQL

    if(global.conexao && global.conexao.state != 'disconected') { // verifica o status da conexao.
        return global.conexao
    }

    const mysql = require('mysql2/promise')
    const conecta = mysql.createConnection("mysql://root:123456789@localhost:3306")
    console.log('conectou ao banco')

    global.conexao=conecta
    return con
}

const allClients = async()=>{
    const con = await connect()
    const [lines] = await con.query('select * from clientes_node')
    return await lines
}

const addClient = async(cliente)=>{
    const con = await connect()
    const sql = 'insert into clientes_node (nome,idade) values(?,?)'
    const valores = [cliente.nome, cliente.idade]
    await  con.query(sql, valores)
}

const updateClient = async(id,cliente)=>{
    const con = await connect()
    const sql = 'update clientes_node set nome=?, idade=? where id=?'
    const valores = [cliente.nome, cliente.idade,id]
    await  con.query(sql, valores,id)
}

export{dbOptions,connect,allClients, addClient}
