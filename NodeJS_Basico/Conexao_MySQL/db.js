
const connect = async ()=>{ // conectando com o banco MySQL

    if(global.conexao && global.conexao.state != 'disconected') { // verifica o status da conexao.
        return global.conexao
    }

    const mysql = require('mysql2/promise')
    const conecta = mysql.createConnection("mysql://root:123456789@localhost:3306/estudo")
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
    await  con.query(sql, valores)
}
const deletClient = async(id)=>{
    const con = await connect()
    const sql = 'delete from clientes_node where id=?'
    const valores = [id]
    await  con.query(sql, valores)
}

conect()
export{connect, allClients, addClient, updateClient, deletClient}

/* 
Script do banco MySQL
create table cliente(
    idCliente int primary key not null auto_increment,
    nome varchar(10),
    idade int 
);

*/