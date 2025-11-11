## Informacoes.

O biblioteca de Filters, será responsavel por conter as excecoes e localizar 
mensagens de erro.

Desta forma a classe que gerenciar os EndPoints a Controller, ficaram mais compactas, pois a responsabilidade 
e o codigo ficará na classe de Filters Exception.


A primeira coisa a ser feita eh implementar a interface de Excecoes.
>		public class ExceptionFilter : ***IExceptionFilter***
>
>		} 

Esta implementando a Interface de Exeption, assim toda as excecoes encontradas 
serao direcionadas para essa classe.<br>
Toda a interface possui metos que sao OBRIGATORIOS a sua implementacao, quando 
inserida em outra classe, sendo uma especie de contratos entre classes.

Esses metodos obrigatorios pertecente a interface sao vazios, pois a classe 
que esta aceitando a interface tera que possui-los e desenvolve-los.

>        public void OnException(ExceptionContext context) {
>
>        }

