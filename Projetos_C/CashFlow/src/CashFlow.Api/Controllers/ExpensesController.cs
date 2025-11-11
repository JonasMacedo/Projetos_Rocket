using CashFlow.Application.UseCases.Expenses.Register;
using CashFlow.Comunnication.Request;
using Microsoft.AspNetCore.Mvc;

namespace CashFlow.Api.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ExpensesController : ControllerBase
{

    [HttpPost]
    public IActionResult Register([FromBody] RequestExpenseJson request)
    {
        var useCase = new RegisterExpenseUseCase();
        var response = useCase.Execute(request);

        return Created(string.Empty, response);


       /* try
        {

            //Verifica se ha falhas com TryCatch, se houver excescao.

            var useCase = new RegisterExpenseUseCase();
            var response = useCase.Execute(request);

            return Created(String.Empty, response);

        }
        catch (ErrorOnValidationException ex) // Chamando a nossa classe de filtro de excecoes.
        {
            //Ira capturar apenas os Arguments Exceptions, para tratamento.

            var errorResponse = new ResponseErrorJson(ex.Errors);

            return BadRequest(errorResponse);

        }catch{
            //catch (DivideByZeroException div) {// Pode ter varios Catch para diferentes tipos de excescao.

            // Para tratar erros desconhecidos.
            var errorResponse = new ResponseErrorJson("Unknown Error");
                
            return StatusCode(StatusCodes.Status500InternalServerError, errorResponse);
        }
       */
    }
}