import { SearchResultModel } from 'src/app/modules/USDA/models/Search/SearchResultModel';
import { FoodSearchCriteriaModel } from "../../models/Search/FoodSearchCriteriaModel"

export interface UsdaState {
    searchResult: SearchResultModel
    foodSearchCriteria: FoodSearchCriteriaModel
    currentFdcId: number | null
    toggleSearchFilter: boolean
}