namespace Nustrishare.USDA.DTO.Search
{
	public class FoodSearchCriteriaModel
	{
		public FoodSearchCriteriaModel(string query)
		{
			Query = query;
		}
		public string Query { get; set; }

		public List<string>? SelectedDataTypes { get; set; }

		public int? PageSize { get; set; }

		public int? PageNumber { get; set; }

		public string? SelectedSortBy { get; set; }

		public string? SelectedSortOrder { get; set; }

		public string? BrandOwner { get; set; }

		public List<string>? SelectedTradeChannels { get; set; }

		public DateTime? StartDate { get; set; }

		public DateTime? EndDate { get; set; }
	}
}
