# Sobre este projeto:
Servidor com CRUD simples usado o FastiFy.
O FastiFy trata-se de um micro framework similar ao Express.


### Banco de dados na memoria local.
O "***database-memory***" ira guardar os aquivos na memoria local da maquina, apenas para facilitar os testes iniciais da aplicação.
Conforme o servidor for avançando sera substituido pelo banco de dados.

#### Ajuste de Array:
- o Entries retorna um array com diversos objetos no seu interior.
- para ajustar podemos usar o MAP para percore-lo e fazer modificações
![Imagem de ajuste do array](Screenshot_20.png)
- na imagem estamos pegando o Id que esta na primera posição do array retornado do Entries.
- em seguida o restante da informação.
- e por ultimo retornando da função, todas as informações o Id e com o spread as informações restantes do array.

### Banco de dados PostGres

O banco usado para esta aplicação sera o Postgres, será usado uma versão online da ***Neon*** podera saber mais ou aderir no site:
- https://neon.tech

Foi criado o arquivo "**createTable.js**" com a definição da tabela, bastando apenas rodar o comando "**node createTable.js**".

