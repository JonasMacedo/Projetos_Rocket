Criando servidor com CRUD simples usado o FastiFy.

O FastiFy trata-se de um micro framework similar ao Express.


## Banco de dados na memoria local.
O "database-memory" ira guardar os aquivos na memoria local, da maquina apenas para facilitar os testes iniciais da aplicação.

#### Ajuste de Array:
- o Entries retorna um array com diversos objetos no seu interior.
- para ajustar podemos usar o MAP para percore-lo e fazer modificações
![Imagem de ajuste do array](Screenshot_20.png)
- na imagem estamos pegando o Id que esta na primera posição do array retornado do Entries.
- em seguida o restante da informação.
- e por ultimo retornando da função, todas as informações o Id e com o spread as informações restantes do array.