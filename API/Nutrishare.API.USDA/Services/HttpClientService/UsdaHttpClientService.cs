using Nustrishare.USDA.DTO.Search;
using Newtonsoft.Json;
using System.Net.Http;
using Nutrishare.DTO;

namespace Nustrishare.API.USDA.Services.HttpClientService
{
	public interface IUsdaHttpClientService
	{
		Task<ApiResult<SearchResultModel>> Search(FoodSearchCriteriaModel foodSearchCriteria);
	}

	public class UsdaHttpClientService : IUsdaHttpClientService
	{
		private readonly IHttpClientFactory _httpClientFactory;

		public UsdaHttpClientService(IHttpClientFactory httpClientFactory)
		{
			_httpClientFactory = httpClientFactory;
		}

		public async Task<ApiResult<SearchResultModel>> Search(FoodSearchCriteriaModel foodSearchCriteria)
		{
			ApiResult<SearchResultModel> response = null;

			try
			{

				var url = $"https://api.nal.usda.gov/fdc/v1/foods/search?";
				var apiKey = "ale1SF2Fj1qAKIfZcpyYPsmy13P6GM7bDSUDU6T6";

				url += $"api_key={apiKey}";
				// Can blindly add to url, front end doesn't allow empty string value for Query
				url += $"&query={foodSearchCriteria.Query}";
			
				if (foodSearchCriteria.SelectedDataTypes != null)
				{
					if (foodSearchCriteria.SelectedDataTypes.Count > 0)
						url += $"&dataType={String.Join(',', foodSearchCriteria.SelectedDataTypes)}";
				}

				if (foodSearchCriteria.PageSize != null || foodSearchCriteria.PageSize > 0)
					url += $"&pageSize={foodSearchCriteria.PageSize}";
			
				if (foodSearchCriteria.PageNumber != null || foodSearchCriteria.PageNumber > 1)
				{
					url += $"&pageNumber={foodSearchCriteria.PageNumber}";
				}
				else
				{
					url += $"&pageNumber=1";
				}

				if (foodSearchCriteria.SelectedSortBy != null)
					url += $"&sortBy={String.Join(',', foodSearchCriteria.SelectedSortBy)}";
			
				if (foodSearchCriteria.SelectedSortOrder != null)
					url += $"&sortOrder={String.Join(',', foodSearchCriteria.SelectedSortOrder)}";
			
				if (foodSearchCriteria.BrandOwner != null && foodSearchCriteria.BrandOwner != "")
					url += $"&brandOwner={foodSearchCriteria.BrandOwner}";

			

				var client = _httpClientFactory.CreateClient();
				var usdaResponse = await client.GetAsync($"{url}");
				var jsonResponse = await usdaResponse.Content.ReadAsStringAsync();
				var target = JsonConvert.DeserializeObject<SearchResultModel>(jsonResponse);
				response = ApiResultHelper.GetSuccessResult(target);
				return response;

			}
			catch (Exception ex)
			{
				var logId = ApiResultHelper.GenerateLogId;
				response = ApiResultHelper.GetFailedResult<SearchResultModel>("Failed, Internal Error", ex.Message, logId, isException: true);
				return response;
			}
		}
	}
}
