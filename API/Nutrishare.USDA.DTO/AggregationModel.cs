using Newtonsoft.Json;

namespace Nustrishare.USDA.DTO
{
	public class AggregationModel
	{
		[JsonIgnore]
		public List<NutrientModel> Nutrients { get; set; }
	}
}
