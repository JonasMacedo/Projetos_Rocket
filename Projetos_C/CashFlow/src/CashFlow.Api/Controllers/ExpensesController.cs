using CashFlow.Application.UseCases.Expenses.Register;
using CashFlow.Comunnication.Request;
using CashFlow.Comunnication.Response;
using Microsoft.AspNetCore.Mvc;

namespace CashFlow.Api.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ExpensesController : ControllerBase
{

    [HttpPost]
    public IActionResult Register([FromBody] RequestExpenseJson request)
    {

        try
        {

            //Verifica se ha falhas com TryCatch, se houver excescao.

            var useCase = new RegisterExpenseUseCase();
            var response = useCase.Execute(request);

            return Created(String.Empty, response);

        }
        catch (ArgumentException ex)
        {
            //Ira capturar apenas os Arguments Exceptions, para tratamento.

            var errorResponse = new ResponseErrorJson();
            errorResponse.ErrorMessage=ex.Message;

            return BadRequest(errorResponse);

        }catch{
            //catch (DivideByZeroException div) {// Pode ter varios Catch para diferentes tipos de excescao.

            // Para tratar erros desconhecidos.
            var errorResponse = new ResponseErrorJson{
                //Forma otimizada do catch acima.
                ErrorMessage = "Unknown Error"
            };
            return StatusCode(StatusCodes.Status500InternalServerError, errorResponse);

        }

    }
}
