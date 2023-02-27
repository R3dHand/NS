namespace Nustrishare.USDA.DTO.Common
{
	public class FinalFoodInputModel
	{
		public int Id { get; set; }

		public float Amount { get; set; }

		public string? FoodDescription { get; set; }

		public int IngredientCode { get; set; }

		public string? IngredientDescription { get; set; }

		public float IngredientWeight { get; set; }

		public string? PortionCode { get; set; }

		public string? PortionDescription { get; set; }

		public int SequenceNumber { get; set; }

		public int SurveyFlag { get; set; }

		public string? Unit { get; set; }
	}
}
