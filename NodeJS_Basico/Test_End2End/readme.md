# Definição deste projeto:

- Este projeto precia do NodeJS na versão 19 ou superior, pois já possui as funções de teste.

- Desta forma não será mais necesario utilizar frameworks como Postman, Insomnia para realizar as verificações de rotas e etc.

- Existem trechos de codigo comentados, utilizados para teste ou explicação.

#### Link da aula: 
- Poderá verificar o conteudo pelo linkd `https://www.youtube.com/watch?v=xSDJnj-pgxU `

#### Bibliotecas usadas:
- JWT

## Como configurar:  

> #### Definido o script para testes:
> Será necesarrio criar uma arquivo de testes, neste projeto foi criado o `api.test.js`
> 
> - E para poder realizar o testes que forem definidos no arquivo de teste, será necessario definir no arquivo`package.json` um script para rodar os testes: 
> ```
> "scripts": {
>     "dev": "node --watch api.js",
>     "test:dev": "node --test --watch api.test.js",
>     "test": " node --test api.test.js"
> },
> ```
> - O comando `--test` e `--watch` só esta disponivel nas versoes mais novas do node 19>, para executar bastar usando no CMD o comando `npm run test:dev`.

> #### Estrutura do codigo:
> - No arquivo `api.json`erá necessario exportar a instancia do servidor, para usar nos testes:
> > ```
> > const app = createServer(handler) // para permitir usar os testes.
> > .listen(3035,()=>console.log("Servidor Ativo"))
> > 
> > export {app}
> > ```

> 
> #### Estrutura de teste:
> 
> - No arquivo `api.test.js` onde será codado os testes, precisara importar o`node:test`
>    - import {describe, before, after, it } from "node:test"
>    - describe: usado para criar a suite.
>    - before: tudo que sera executando ANTES de executar os testes.
>    - after: tudo que sera executando DEPOIS de executar os testes.
>    - it: usado para definir oque será feito em cada teste.
> 
> - Exemplo:
> >```
> > import {describe, before, after, it } from "node:test" //Importa da biblioteca.
> > 
> > describe('API WorkFlow', ()=>{ // Definindo a suite de teste.
> > 
> >     let _server = {}
> > 
> >     before(async ()=>{ //Valida se a aplicacao esta rodando.
> >         
> >         _server = (await import('./api.js')).app //import dinamico. 
> > 
> >         await new Promise(res => _server.once('listening', res))
> >     })
> > 
> >     after(done => _server.close(done)) //Valida se a aplicacao esta fechada.
> > 
> >     it('Devera receber Usuario não autorizado! E retornar erro.', async()=>{}
> > 
> > ```
> - É de extrema importancia saber exatamente oque será feito, primeiramenteo teste deve falhar, para depois ir ajustando ele.
> - Constantemente os arquivos `api.json` e `api.test.json` estaram se comunicando.
>

