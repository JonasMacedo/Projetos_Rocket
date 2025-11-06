## Informacoes.

O biblioteca de Excepetion, será responsavel por conter as excesoes e localizar mensagens de erro.

Criar exceções personalizadas é importante, para ter mais controle sobre os parâmetros e evitar problemas de segurança.

### Atencao: 
Uma classe em C Sharp precisa ser instanciada para ser utilizada, para evitar esse comportamento, é definido como uma classe *`Abstrata`*.    
Para ser uma classe de Excessoes sera necessario ela ter a heranca do `SysTemException`.

>		public ***abstract*** class CashFlowException : ***SysTemException***{
>
>		} 

Com a heranca do ^SysTemException^ podemos utilizar diversos tipo excesoes, e isso ira altera os *status code* retornado para a aplicacao.

Sendo assim as demais classes criadas iram ser filhas da classe de excessao pai, e nelas conteram as validacoes mapeadas.

>		public class ***ErrorOnValidationException*** : **CashFlowException**

Nas classes filhas eh muito util a criacao de metodos construtores.
Assim como classes que forem relacionadas como Controllers, Comunnication e Etc; precisam ser ajustados conforme a necessidade.


No caso do Controller dentro do Catch sera chamado o classe de excesoes para validar.

>		[HttpPost] 
>		public IActionResult Register([FromBody] RequestExpenseJson request){
>			try {
>				// Codigo com validacoes.
> 			} catch (ErrorOnValidationException ex) {....}

