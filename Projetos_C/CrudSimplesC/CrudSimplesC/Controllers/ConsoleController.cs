using Microsoft.AspNetCore.Mvc;

namespace CrudSimplesC.Controllers;

// [Route("api/[controller]")] Desnecessario por ser uma classe filha de DeviceController.
// [ApiController] Desnecessario por ser uma classe filha de DeviceController.
public class ConsoleController : DeviceController
    // DeviceControle sera a classe PAI, sendo essa classe filha herdara metodos/funcoes.
{
    [HttpGet]
    public IActionResult Get() {
        var key = GetCustomKey();
        return Ok(key);
    }
}
