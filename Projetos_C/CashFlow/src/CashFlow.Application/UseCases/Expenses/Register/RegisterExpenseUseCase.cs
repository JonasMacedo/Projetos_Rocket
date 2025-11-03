using CashFlow.Comunnication.Enums;
using CashFlow.Comunnication.Request;
using CashFlow.Comunnication.Response;

namespace CashFlow.Application.UseCases.Expenses.Register;
public class RegisterExpenseUseCase
{
    public ResponseRegisteredExpenseJson Execute(RequestExpenseJson request)
    {

        Validate(request);
        
        return new ResponseRegisteredExpenseJson();
    }

    private void Validate(RequestExpenseJson request) {

        var validator = new RegisterExpenseValidator();
        var result = validator.Validate(request);

        if (result.IsValid == false) {
            var errorMessages =result.Errors.Select(f => f.ErrorMessage).ToList();
        }

        /* Validacao sem usar a dependencia do NuGet FluentValidator.
         
        var titleIsEmpty = string.IsNullOrWhiteSpace(request.Title);// Sera TRUE se a variavel for nula ou vazia. 
        
        if (titleIsEmpty) {
            //Verifica se o titulo nao eh vazio ou null.

            throw new ArgumentException("The title is required."); // Lancando uma excessão.
        }

        if (request.Amount <=0) {
            //Verifica se o valor eh maior que ZERO.

            throw new ArgumentException("The amount must be greater than zero.");
        }

        var dateResult = DateTime.Compare(request.Date, DateTime.UtcNow);
        if (dateResult > 0) {
            // Verifica se data atual eh ou do passado, NUNCA uma data no futuro.

            throw new ArgumentException("Date cannot be for the future.");
        }

        var paymentTypeIsValid = Enum.IsDefined(typeof(PaymentType), request.PaymentType);
        if (paymentTypeIsValid == false) {
            //Verifica se o tipo de pagamento em Enum é valido.

            throw new ArgumentException("Payment Type is not valid.");
        }
        */

    }
}
