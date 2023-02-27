using System.Text.Json.Serialization;

namespace Nustrishare.API.USDA.Models.Search
{
    public class SearchResultModel
    {
        public SearchResultModel(FoodSearchCriteriaModel foodSearchCriteria)
        {
            FoodSearchCriteria = foodSearchCriteria;
        }

        public int TotalHits { get; set; }

        public int CurrentPage { get; set; }

        public int TotalPages { get; set; }

        public List<int>? PageList { get; set; }

        public FoodSearchCriteriaModel FoodSearchCriteria { get; set; }

        public List<SearchResultFoodModel>? Foods { get; set; }













        [JsonIgnore]
        public AggregationModel? Aggregations { get; set; }


        [JsonIgnore]
        public AggregationModel? Nutrients { get; set; }
    }
}

