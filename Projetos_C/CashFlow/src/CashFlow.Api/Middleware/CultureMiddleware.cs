using System.Globalization;

namespace CashFlow.Api.Middleware;

public class CultureMiddleware
{
    private readonly RequestDelegate _next;
    public CultureMiddleware(RequestDelegate next)
    {   
        _next = next;   
    }

    public async Task Invoke(HttpContext context)
    {
        var culture = context.Request.Headers.AcceptLanguage.FirstOrDefault(); // Extraindo do Header a cultura.

        var cultureInfo = new CultureInfo("en"); // Instanciando um cultura padrao.

        if (string.IsNullOrWhiteSpace(culture)== false) {
            
            //Verifica se a culture contem informacao.

            cultureInfo = new CultureInfo(culture);
        }

        CultureInfo.CurrentCulture = cultureInfo;
        CultureInfo.CurrentUICulture = cultureInfo;

        await _next(context);

    }

}
