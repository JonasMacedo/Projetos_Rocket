import Firebird from "node-firebird"

const fbOptions = { 
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

function executeQuery(sql, params, callback){
    
    Firebird.attach(fbOptions, function(err, db) {
            
        if (err){
           return callback(err,[])
        }
    
        // res.status(200).send('Listando produtos:\n') // Nao pode ter 2 repostas http iguais.
    
        // db = DATABASE
        db.query(sql, params, function(err, result) {
            //'SELECT codigo, descricao FROM testprodutogeral'
            db.detach();
            
            if (err){
                return callback(err,[]); 
            }else{
                return callback(undefined, result);                 
            }
    
        });
    
    });
}

export{executeQuery}