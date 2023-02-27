namespace Nustrishare.API.USDA.Models
{
    public class NutrientAcquisitionDetailsModel
    {
        public int SampleUnitId { get; set; }
        public DateTime PurchaseDate { get; set; }
        public string StoreCity { get; set; } = string.Empty;
        public string StoreState { get; set; } = string.Empty;
    }
}
/*
     NutrientAcquisitionDetails:
          type: object
          properties:
            sampleUnitId: 
              type: integer
              example: 321632
            purchaseDate:
              type: string
              example: "12/2/2005"
            storeCity:
              type: string
              example: TRUSSVILLE
            storeState:
              type: string
              example: AL
 */