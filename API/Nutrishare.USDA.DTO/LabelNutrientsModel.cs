using Nustrishare.USDA.DTO.LabelNutrientModels;

namespace Nustrishare.USDA.DTO
{
    public class LabelNutrientsModel
    {
        public FatModel? Fat { get; set;}
        public SaturatedFatModel? SaturatedFat { get; set;}
        public TransFatModel? TransFat { get; set; }
        public CholesterolModel? Cholesterol { get; set; }
        public SodiumModel? Sodium { get; set; }
        public CarbohydratesModel? Carbohydrates { get; set; }
        public FiberModel? Fiber { get; set; }
        public SugarsModel? Sugars { get; set; }
        public ProteinModel? Protein { get; set; }
        public CalciumModel? Calcium { get; set; }
        public IronModel? Iron { get; set; }
        public PotassiumModel? Potassium { get; set; }
        public CaloriesModel? Calories { get; set; }
    }
}
/*
 labelNutrients:
          type: object
          properties:
            fat:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 8.9992
            saturatedFat:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 0.9996
            transFat:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 0
            cholesterol:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 0
            sodium:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 0
            carbohydrates:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 12.0008
            fiber:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 1.988
            sugars:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 7.9996
            protein:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 4.0012
            calcium:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 19.88
            iron:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 0.7196
            potassium:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 159.88
            calories:
              type: object
              properties:
                value:
                  type: number
                  format: float
                  example: 140
 */