import { SearchResultFoodNutrientModel } from "./SearchResultFoodNutrientModel"
import { FoodAttributeTypeModel } from "../Common/FoodAttributeTypeModel"
import { FoodMeasureModel } from "../Common/FoodMeasureModel"
import { FinalFoodInputModel } from "../Common/FinalFoodInputModel"

export class SearchResultFoodModel{
    fdcId: number
    dataType?: string
    description?: string
    lowercaseDescription: string
    scientificName?: string
    commonNames?: string
    additionalDescriptions?: string
    ndbNumber: number 
    gtinUpc?: string
    publishedDate: Date
    brandOwner?: string
    brandName?: string
    ingredients?: string
    marketCountry?: string
    foodCategory?: string
    modifiedDate: Date
    mostRecentAquisitionDate: Date
    dataSource?: string
    dataPackageWeightSource?: string
    servingSizeUnit?: string
    servingSize: number 
    allHighlightFields?: string
    score: number 
    foodNutrients?: SearchResultFoodNutrientModel[]
    finalFoodInputFoods?: FinalFoodInputModel[]
    foodMeasures?: FoodMeasureModel[] 
    foodAttributeTypes?: FoodAttributeTypeModel[] 
}