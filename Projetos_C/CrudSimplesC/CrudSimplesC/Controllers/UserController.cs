using CrudSimplesC.Communication.Requests;
using CrudSimplesC.Communication.Response;
using Microsoft.AspNetCore.Mvc;

namespace CrudSimplesC.Controllers;
[Route("api/[controller]")] // Se trata do nome da rota. O C# ignora a palavra "Controler".
[ApiController]
public class UserController : ControllerBase
{
    
    // Controller mantem todas os Endpoints da classe, e suas regras de negocio ou logicas.

    [HttpGet] // Define o tipo de funcao do EndPoint.
    
    [Route("{id}/{nickname}")] //Para passar parametros de GET na rota.

    [ProducesResponseType( typeof(User), StatusCodes.Status200OK)] // Definindo tipos de retorno.
    [ProducesResponseType( typeof(string), StatusCodes.Status400BadRequest)]

    public IActionResult Get(int id, string nickname){

        // Todo Endpoint precisa ser do tipo IActionResult, sendo assim deve ter um retorno(return).

        var response = new User { Id = 1, Age = 32, Name = "Jonas"};

        return Ok(response);
    }
    
    [HttpGet]
    public IActionResult GetById([FromHeader]string? name, [FromHeader]int id) {
        // Para especificar que o parametro vem do Header [FromHeader].
        
        var response = new User { Id = 1, Age = 32, Name = "Jonas"};
        return Ok(name + id);
    }
    

    [HttpGet("allUsers")] //Precisa especificar caso tenha mais de uma rota do mesmo tipo(GET,PUT e ETC).
    //[Route("all")] 
    [ProducesResponseType(typeof(List<User>), StatusCodes.Status200OK)]
    public IActionResult GetAll() {

        var response = new List<User>()
        {
            new User { Id = 1, Age = 12, Name = "Ze" },
            new User { Id = 2, Age = 21, Name = "Maikon" }
        };
        return Ok(response);
    }

    [HttpPost]
    [ProducesResponseType( typeof(ResponseRegisterUserJson), StatusCodes.Status201Created)] 
    public IActionResult Create([FromBody]RequestRegisterUserJson request) {
        // Para receber dados do corpo da requisicao precisa do [FromBody].
        
        ResponseRegisterUserJson response = new ResponseRegisterUserJson { 
            Id = 2,
            Name = request.Name,
        };
        
        return Created(string.Empty, response);
    }

    [HttpPut]
    [Route("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public IActionResult Upadte([FromBody] RequestUpdateUserJson request, [FromRoute] int id) {  
        
        return NoContent(); 
    }
    
    [HttpDelete]
    [Route("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public IActionResult Delete([FromRoute]int id) {  
        
        return NoContent(); 
    }

    


}
