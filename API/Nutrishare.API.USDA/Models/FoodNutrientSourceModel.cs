namespace Nustrishare.API.USDA.Models
{
    public class FoodNutrientSourceModel
    {
        public int Id { get; set; } 
        public string Code { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;    
    }
}

/*
     FoodNutrientSource:
      properties:
        id:
          type: integer
          format: int32
          example: 9
        code: 
          type: string
          example: "12"
        description:
          type: string
          example: "Manufacturer's analytical; partial documentation"
 */