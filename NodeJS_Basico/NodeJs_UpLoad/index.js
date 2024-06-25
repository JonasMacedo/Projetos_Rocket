import express from 'express'

import formidable from 'formidable' // Importando a biblioteca.
import fs from 'fs' // importando metodo para trabalhar com arquivos.
import path from 'path' // metodo para construir caminhos.

const app = express()
app.use(express.json())
const port = 3035

app.get('/',(req,res)=>{
    
    res.send( // formato padrão de envio 
        ` <h2>With <code>"express"</code> npm package</h2>
        <form action="/api/upload_file" enctype="multipart/form-data" method="post">
            <div> <input type="file" name="fileUpload" /></div>
            <input type="submit" value="Upload" />
        </form> `
        // na tag ACTION do form, ira chamar a rota do post "<form action="/api/upload_file"..."
    )
    return res.end()
})

app.post('/api/upload_file',(req,res)=>{
    const form = formidable({})
    // console.log('formidable: ',form)
    
    form.parse(req, (error, fields, files)=>{ //função que parseia os dados do form vindo do request, todos os campos e arquivos são passados para o callback
        
        let oldPath = files.fileUpload[0].filepath // salva o caminho da pasta.
        let diretorioNovo = 'C:\\EcoNFCe\\Imagens\\'+ files.fileUpload[0].originalFilename
        
        console.log('\narquivo: ', oldPath)
        
        if(fs.existsSync(diretorioNovo)){ //verifica se a pasta existe onde sera salvo o arquivo existe.
            fs.rename(oldPath, diretorioNovo,(error)=>{ // ERRO NO RECEBIMENTO DO PARAMETRO
                
                if (error) throw error
                
                res.write('Arquivo movido!!\n'+diretorioNovo)    
                res.end()
                
            })
        }else{
            return res.edn("Deu ruim a pasta ñ existe")
        }
        
    })
})

app.listen(port,()=>{console.log("Servidor ativo \nPara desativar Ctrl+C")})

