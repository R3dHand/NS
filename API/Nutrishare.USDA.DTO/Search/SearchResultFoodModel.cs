using Nustrishare.USDA.DTO.Common;

namespace Nustrishare.USDA.DTO.Search
{
	public class SearchResultFoodModel
	{
        public int FdcId { get; set; }

        public string? DataType { get; set; }

        public string? Description { get; set; }

        public string? LowercaseDescription { get; set; }

        public string? ScientificName { get; set; }

        public string? CommonNames { get; set; }

        public string? AdditionalDescriptions { get; set; }

        public int NdbNumber { get; set; }

        public string? GtinUpc { get; set; }

        public DateTime PublishedDate { get; set; }

        public string? BrandOwner { get; set; }

        public string? BrandName { get; set; }

        public string? Ingredients { get; set; }

        public string? MarketCountry { get; set; }

        public string? FoodCategory { get; set; }

        public DateTime ModifiedDate { get; set; }

        public DateTime MostRecentAquisitionDate { get; set; }

        public string? DataSource { get; set; }

        public string? DataPackageWeightSource { get; set; }

        public string? ServingSizeUnit { get; set; }

        public float ServingSize { get; set; }

        public string? AllHighlightFields { get; set; }

        public float Score { get; set; }

        public List<SearchResultFoodNutrientModel>? FoodNutrients { get; set; }

        public List<FinalFoodInputModel>? FinalFoodInputFoods { get; set; }
        // missing foodVersionIds
        // missing foodAttributes
        // missing aggregations

        public List<FoodMeasureModel>? FoodMeasures { get; set; }

        public List<FoodAttributeTypeModel>? FoodAttributeTypes { get; set; }
    }
}
