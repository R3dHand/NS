using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Nutrishare.API.Identity.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class IdentityController : ControllerBase
	{
		[HttpGet("")]
		public IActionResult Get()
		{
			return Ok("Identity/Get");
		}
	}
}
