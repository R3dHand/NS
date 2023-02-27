using Newtonsoft.Json;

namespace Nustrishare.API.USDA.Models
{
	public class AggregationModel
	{
		[JsonIgnore]
		public List<NutrientModel> Nutrients { get; set; }
	}
}
