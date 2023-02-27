import { FoodAttributeModel } from "./FoodAttributeModel"

export class FoodAttributeTypeModel {
    id: number
    name?: string
    description?: string
    foodAttributes?: FoodAttributeModel[]
}