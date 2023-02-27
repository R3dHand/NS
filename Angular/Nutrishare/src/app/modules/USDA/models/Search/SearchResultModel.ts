import { SearchResultFoodModel } from "./SearchResultFoodModel"
import { FoodSearchCriteriaModel } from "./FoodSearchCriteriaModel"

export class SearchResultModel{
    totalHits: number
    currentPage: number
    totalPages: number
    pageList?: number[]
    foodSearchCriteria: FoodSearchCriteriaModel
    foods: SearchResultFoodModel[]
}