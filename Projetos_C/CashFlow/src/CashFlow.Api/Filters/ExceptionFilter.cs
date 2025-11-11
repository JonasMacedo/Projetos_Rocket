using CashFlow.Comunnication.Response;
using CashFlow.Exception.ExceptionsBase;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace CashFlow.Api.Filters;

public class ExceptionFilter : IExceptionFilter // Esta implementando a Interface de Exeption, assim toda as excecoes encontradas serao diirecionadas para essa classe.
{

    // Classe de filtros sera responsavel por conter os Try-Catchs contendo todas as verificacoes de excecoes, mantendo na classe Api, o mais simples possivel.
    public void OnException(ExceptionContext context)
    {
        if (context.Exception is CashFlowException) {

            HandleProjectException(context);

        } else {
            
            ThrowUnknowError(context); 

        }
    }

    private void HandleProjectException(ExceptionContext context){

        if (context.Exception is ErrorOnValidationException){

            var ex = (ErrorOnValidationException)context.Exception; // Forcando um quest.

            var errorResponse = new ResponseErrorJson(ex.Errors);
            context.HttpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
            context.Result = new BadRequestObjectResult(errorResponse);

        }

    }

    private void ThrowUnknowError(ExceptionContext context){

        var errorResponse = new ResponseErrorJson("Unknow Error.");

        context.HttpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;
        context.Result = new ObjectResult(errorResponse);

    }

}
