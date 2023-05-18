import {SneakerItem} from "../basket/types";

export enum Status {
    LOADING ='loading',
    SUCCESS = 'success',
    ERROR = 'error'
}
export interface SneakersSliceState {
    items:SneakerItem[]
    isLoading:Status
}