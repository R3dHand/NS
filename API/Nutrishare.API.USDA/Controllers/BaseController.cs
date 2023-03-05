using Microsoft.AspNetCore.Mvc;
using Nustrishare.API.USDA.Services.HttpClientService;
using Nustrishare.USDA.DTO.Search;
using Nutrishare.DTO;

namespace Nustrishare.API.USDA.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class BaseController : ControllerBase
	{
		protected IActionResult HandleStandardApiResponse(ApiResult response)
		{
			if (response.Success)
			{
				return Ok(response);
			}
			if (response.Errors != null && response.Errors.All(a => a.IsException == false))
			{
				return BadRequest(response.Errors);
			}
			else
			{
				return StatusCode(500, response);
			}
		}
	}
}