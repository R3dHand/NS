namespace Nustrishare.API.USDA.Models
{
	public class AbrigedFoodNutrientModel
	{
        public int Id { get; set; }

        public string? Name { get; set; }

        public float? Amount { get; set; }

        public string? UnitName { get; set; }

        public string? DerivationCode { get; set; }

        public string? DerivationDescription { get; set; }
	}
}
/*
     AbridgedFoodNutrient:
      required:
        - id
        - nutrientNumber
        - unit
      properties:
        number:
          type: integer
          format: uint
          example: 303
        name:
          type: string
          example: "Iron, Fe"
        amount:
          type: number
          format: float
          example: 0.53
        unitName:
          type: string
          example: "mg"
        derivationCode:
          type: string
          example: "LCCD"
        derivationDescription:
          type: string
          example: "Calculated from a daily value percentage per serving size measure"
 */