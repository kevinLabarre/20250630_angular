export interface ApiResponse<T> {
  success: boolean,
  items: number,
  page: number,
  data: T[]
}
