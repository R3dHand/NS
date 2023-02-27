using Microsoft.AspNetCore.Mvc;
using Nustrishare.API.USDA.Services.HttpClientService;
using Nustrishare.USDA.DTO.Search;

namespace Nustrishare.API.USDA.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IUsdaHttpClientService _usdaHttpClientService;
        public HomeController(IUsdaHttpClientService usdaHttpClientService)
        {
            _usdaHttpClientService = usdaHttpClientService;
        }
        ///<summary>Search the USDA Database</summary>
        ///<param name="foodSearchCriteria"></param>
        [HttpPost]
        public SearchResultModel Search([FromBody] FoodSearchCriteriaModel foodSearchCriteria)
        {
            return _usdaHttpClientService.Search(foodSearchCriteria).Result;
        }
    }
}
