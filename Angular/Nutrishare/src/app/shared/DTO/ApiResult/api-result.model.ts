import { ApiError } from "./api-errors.model"

export class ApiResult {
    success: boolean
    message: string
    errors: ApiError[]
    result: any
}
