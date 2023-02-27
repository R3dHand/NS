using System.ComponentModel.DataAnnotations;

namespace Nustrishare.USDA.DTO
{
    public class FoodNutrientModel
    {
        [Required]
        public int Id { get; set; }
        public float Amount { get; set; }
        public int DataPoints { get; set; }
        public float Min { get; set; }
        public float Max { get; set; }
        public float Median { get; set; }
        public string Type { get; set; } = string.Empty;
        public NutrientModel? Nutrient { get; set; }
        public FoodNutrientDerivationModel? FoodNutrientDerivation { get; set; }
        public NutrientAnalysisDetailsModel? NutrNutrientAnalysisDetailsient { get; set; }

    }
}
/*
     FoodNutrient:
      required:
        - id
        - nutrientNumber
        - unit
      properties:
        id:
          type: integer
          format: uint
          example: 167514
        amount:
          type: number
          format: float
          example: 0E-8
        dataPoints:
          type: integer
          format: int32
          example: 49
        min:
          type: number
          format: float
          example: 73.73000000
        max:
          type: number
          format: float
          example: 91.80000000
        median:
          type: number
          format: float
          example: 90.30000000
        type:
          type: string
          example: "FoodNutrient"
        nutrient:
          $ref: '#/components/schemas/Nutrient'
        foodNutrientDerivation:
          $ref: '#/components/schemas/FoodNutrientDerivation'
        nutrientAnalysisDetails:
          $ref: '#/components/schemas/NutrientAnalysisDetails'
 */