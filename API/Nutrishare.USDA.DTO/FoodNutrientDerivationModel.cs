namespace Nustrishare.USDA.DTO
{
    public class FoodNutrientDerivationModel
    {
        public int Id { get; set; }
        public string Code { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public FoodNutrientSourceModel? FoodNutrientSource { get; set; }
    }
}

/*
     FoodNutrientDerivation:
      properties:
        id:
          type: integer
          format: int32
          example: 75
        code:
          type: string
          example: "LCCD"
        description:
          type: string
          example: "Calculated from a daily value percentage per serving size measure"
        foodNutrientSource:
          $ref: '#/components/schemas/FoodNutrientSource'
 */