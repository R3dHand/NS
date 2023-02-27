namespace Nustrishare.API.USDA.Models.Common
{
	public class FoodMeasureModel
	{
		public string? DisseminationText { get; set; }

		public float Weight { get; set; }

		public int Id { get; set; }

		public string? modifier { get; set; }

		public int Rank { get; set; }

		public string? MeasureUnitAbbreviation { get; set; }

		public string? MeasureUnitName { get; set; }

		public int MeasureUnitId { get; set; }
	}
}
