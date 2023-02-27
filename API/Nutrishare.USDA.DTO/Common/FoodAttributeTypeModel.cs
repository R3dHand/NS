namespace Nustrishare.USDA.DTO.Common
{
    public class FoodAttributeTypeModel
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public string? Description { get; set; }

        public List<FoodAttributeModel>? FoodAttributes { get; set; }
    }
}