namespace CashFlow.Comunnication.Response;
public class ResponseErrorJson
{
    public List<string> ErrorMessages { get; set; }

    public ResponseErrorJson(string errorMessage){
        // Definindo construtor
        ErrorMessages = [errorMessage];
    }

    public ResponseErrorJson(List<string> errorMessages){
        
        //Pode ser ter mais de um construtor em uma classe, contando que tenham parametros DIFERENTES.
        
        ErrorMessages = errorMessages;
    }

}
