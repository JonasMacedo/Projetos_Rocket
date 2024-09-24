informacões

Para trabalhar com banco de dados MySQL, primeira sera necessario instalar as dependencia.

- npm install mysql2 --save.
- npm install 

Ao se comunicar com bancos sera muito utilizado funcoes assincronas, promisses etc, devido 
haver consultas no banco.

Quando utilizar rotas com metodos assincronos precisará definir a rota como assincrona tbm.

app.get("/allClients", async (req,res)=>{
    
    const clientes = await allClients()
    res.json(clientes)
})

Instalando dependencia do JWT no projeto.
- npm i jsonwebtoken

O JWT é um método que representa a comunicação segura entre duas partes. 
Esse token é composto por três partes: cabeçalho, carga útil e assinatura.
Elas são separadas por “.”
