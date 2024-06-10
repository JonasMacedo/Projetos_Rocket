
const connect = async ()=>{ // conectando com o banco MySQL
    
    if(global.conexao && global.conexao.state != 'disconected') { // verifica o status da conexao.
        return global.conexao
    }
        
    const mysql = import ('mysql2/promise')
    const conecta = (await mysql).createConnection("mysql://root:jonas@123@localhost:3306/estudo_node")
    console.log('conectou ao banco')

    global.conexao=conecta
    return conecta
}

const allClients = async()=>{
    console.log('Metodo de busca clientes')
    const con = await connect()
    const [lines] = await con.query('select * from cliente;')
    return  lines
}

const addClient = async(cliente)=>{
    console.log(cliente)
    const con = await connect()
    
    const sql = 'insert into cliente (nome,idade,sobreNome) values(?,?,?)'
    // const valores = [cliente.nome, cliente.idade]
    const valores = [cliente[0], cliente[1], cliente[2]]
    await  con.query(sql, valores)
}

const updateClient = async(id,cliente)=>{
    const con = await connect()
    const sql = 'update cliente set nome=?, idade=?, sobrenome=? where id=?'
    const valores = [cliente.nome, cliente.idade,id]
    await  con.query(sql, valores)
}
const deletClient = async(id)=>{
    const con = await connect()
    const sql = 'delete from cliente where id=?'
    const valores = [id]
    await  con.query(sql, valores)
}

connect() // Ele mesmo já executa a conexão com o banco.

export{connect, allClients, addClient, updateClient, deletClient}

/* 
create schema Estudo_node;
use estudo_node

create table cliente(
	idCliente int primary key not null auto_increment,
    nome varchar(10),
    idade int 
);

*/