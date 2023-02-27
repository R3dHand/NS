export class FoodSearchCriteriaModel {
    query: string
    selectedDataTypes?: string[]
    pageSize?: number
    pageNumber?: number
    selectedSortBy?: string
    selectedSortOrder?: string
    brandOwner?: string
    selectedTradeChannels?: string
    startDate?: Date
    endDate?:Date
}