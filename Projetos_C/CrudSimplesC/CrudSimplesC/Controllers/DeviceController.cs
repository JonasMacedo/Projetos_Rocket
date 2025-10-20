using Microsoft.AspNetCore.Mvc;
using System.Runtime.Intrinsics.X86;

namespace CrudSimplesC.Controllers;
[Route("api/[controller]")]
[ApiController]


//Ao colocar a palavra abstract antes da declaração de uma classe, estamos impedindo a criação de instâncias dessa classe.
public abstract class DeviceController : ControllerBase{

    /* Heranca: 
        Em C Sharp nao é possível ter herancas multiplas.
        Sendo assim a classe PAI(base) tera todas propriedades/metodos.
        Nas classes FILHA(derivada) irao ter acesso, podendo sobreescrever(Override).
        Uma classe filha pode ter APENAS uma classe pai.
     */

    
    protected bool IsConnected() => true; //a propriedade com o PROTECTED somente pode ser usado dentro da classe ou classe filhas.

    protected string GetCustomKey(){ //Todo metodo public o C# identifica como um GET.
        return Request.Headers["MyKey"].ToString();
    }

    [HttpGet("EndPoint_Teste")]
    public IActionResult TestGet()
    {
        return Ok("esta funcionando");
    }

}
