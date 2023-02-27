namespace Nustrishare.USDA.DTO
{
    public class NutrientAnalysisDetailsModel
    {
        public int SubSampleId { get; set; }
        public int Amount { get; set; }
        public int NutrientId { get; set; }
        public string LabMethodDescription { get; set; } = string.Empty;
        public string LabMethodOriginalDescription  { get; set; } = string.Empty;
        public string LabMethodLink { get; set; } = string.Empty;
        public string LabMethodTechnique { get; set; } = string.Empty;
        public List<NutrientAcquisitionDetailsModel>? NutrientAcquisitionDetails { get; set; }
    }
}
/*
       properties:
        subSampleId:
          type: integer
          example: 343866
        amount:
          type: number
          format: float
          example: 0E-8
        nutrientId:
          type: integer
          example: 1005
        labMethodDescription:
          type: string
          example: "10.2135/cropsci2017.04.0244"
        labMethodOriginalDescription:
          type: string
        labMethodLink:
          type: string
          format: url
          example: "https://doi.org/10.2135/cropsci2017.04.0244"
        labMethodTechnique:
          type: string
          example: "DOI for Beans"
        nutrientAcquisitionDetails:
          type: array
          items:
            $ref: '#/components/schemas/NutrientAcquisitionDetails'
 */