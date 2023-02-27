namespace Nustrishare.USDA.DTO.Search
{
	public class SearchResultFoodNutrientModel
	{
		public int NutrientId { get; set; }

		public string? NutrientName { get; set; }

		public string? NutrientNumber { get; set; }

		public string? UnitName { get; set; }

		public string? DerivationCode { get; set; }

		public string? DerivationDescription { get; set; }

		public int DerivationId { get; set; }

		public float Value { get; set; }

		public int FoodNutrientSourceId { get; set; }

		public string? FoodNutrientSourceCode { get; set; }

		public string? FoodNutrientSourceDescription { get; set; }

		public int Rank { get; set; }

		public int IndentLevel { get; set; }

		public int FoodNutrientId { get; set; }
	}
}
