using Microsoft.AspNetCore.Mvc;
using Nustrishare.API.USDA.Services.HttpClientService;
using Nustrishare.USDA.DTO.Search;

namespace Nustrishare.API.USDA.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class FoodsController : ControllerBase
	{
        private readonly IUsdaHttpClientService _usdaHttpClientService;
        public FoodsController(IUsdaHttpClientService usdaHttpClientService)
        {
            _usdaHttpClientService = usdaHttpClientService;
        }
        ///<summary>Search the USDA Database</summary>
        ///<param name="foodSearchCriteria"></param>
        [HttpPost("search")]
        public SearchResultModel Search([FromBody] FoodSearchCriteriaModel foodSearchCriteria)
        {
            return _usdaHttpClientService.Search(foodSearchCriteria).Result;
        }
    }
}
