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

            return BadRequest(ex.Message);

        }catch{
            //catch (DivideByZeroException div) {// Pode ter varios Catch para diferentes tipos de excescao.

            // Para tratar erros desconhecidos.
            return StatusCode(StatusCodes.Status500InternalServerError, "Unknown Error");

        }

    }
}
