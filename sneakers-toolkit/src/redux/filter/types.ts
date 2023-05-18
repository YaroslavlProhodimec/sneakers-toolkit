
export interface FilterSliceState {
    searchValue: string
    categoryId:number
    currentPage:number
    sort:{
        name:string
        sortProperty:  string
    }


}
export enum Sort {
    RATING='rating',
    PRICE='price'
}