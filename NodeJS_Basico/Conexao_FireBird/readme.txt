informacões

Para trabalhar com banco de dados FireBird, primeiro sera necessario instalar as dependencia.

- npm install node-firebird

Ao se comunicar com bancos sera muito utilizado funcoes assincronas, promisses etc, devido 
haver consultas no banco.

ATENCAO: Uma requisição HTTP não pode ter duas respostas pra uma unica requisição!!

Transações:
São necessarias quando se precisa alterar informações em mais de uma tabela no banco de dados, 
e garantir que fique salvo a informação em todas as tabelas.
Ou se der algum erro ao gravar, é feito um rollback em que se é desfeito toda a opereação, para 
garantir a integridade do banco.




