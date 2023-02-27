using Nustrishare.USDA.DTO.Common;

namespace Nustrishare.USDA.DTO
{
    public class FoodUpdateLogModel
    {
        public int FdcId { get; set; }
        public DateTime AvailableDate { get; set; }
        public string BrandOwner { get; set; } = string.Empty;
        public string DataSource { get; set; } = string.Empty;
        public string DataType { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string FoodClass { get; set; } = string.Empty;
        public string GtinUpc { get; set; } = string.Empty;
        public string HouseholdServingFullText { get; set; } = string.Empty;
        public string Ingredients { get; set; } = string.Empty;
        public DateTime ModifiedDate { get; set; }
        public DateTime PublicationDate { get; set; }
        public float ServingSize { get; set; }
        public string ServingSizeUnit { get; set; } = string.Empty;
        public string BrandedFoodCategory { get; set; } = string.Empty;
        public string Changes { get; set; } = string.Empty;
        public List<FoodAttributeModel>? FoodAttributes { get; set; }
    }
}
/*
FoodUpdateLog:
      properties:
        fdcId:
          type: integer
          example: 534358
        availableDate:
          type: string
          example: "8/18/2018"
        brandOwner:
          type: string
          example: "Kar Nut Products Company"
        dataSource:
          type: string
          example: "LI"
        dataType:
          type: string
          example: "Branded"
        description:
          type: string
          example: "NUT 'N BERRY MIX"
        foodClass:
          type: string
          example: 'Branded'
        gtinUpc:
          type: string
          example: "077034085228"
        householdServingFullText:
          type: string
          example: "1 ONZ"
        ingredients:
          type: string
          example: "PEANUTS (PEANUTS, PEANUT AND/OR SUNFLOWER OIL). RAISINS. DRIED CRANBERRIES (CRANBERRIES, SUGAR, SUNFLOWER OIL). SUNFLOWER KERNELS AND ALMONDS (SUNFLOWER KERNELS AND ALMONDS, PEANUT AND/OR SUNFLOWER OIL)."
        modifiedDate:
          type: string
          example: "8/18/2018"
        publicationDate:
          type: string
          example: "4/1/2019"
        servingSize:
          type: integer
          format: float32
          example: 28
        servingSizeUnit:
          type: string
          example: "g"
        brandedFoodCategory:
          type: string
          example: "Popcorn, Peanuts, Seeds & Related Snacks"
        changes:
          type: string
          example: "Nutrient Added, Nutrient Updated"
        foodAttributes:
          type: array
          items:
            $ref: '#/components/schemas/FoodAttribute'
 */