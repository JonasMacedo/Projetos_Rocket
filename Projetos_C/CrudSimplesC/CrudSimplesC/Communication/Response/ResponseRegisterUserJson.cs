namespace CrudSimplesC.Communication.Response;

public class ResponseRegisterUserJson
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;// O nome nao sera nulo, mas vazia.
}
