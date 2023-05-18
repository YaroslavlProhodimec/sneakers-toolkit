export type SneakerItem = {
    id: string,
    image: string,
    name: string
    style?: string
    price: number
    quantity: number
    category?: number
    rating?: number
}
export interface basketSliceState {
    totalPrice:number
    items:SneakerItem[]
}