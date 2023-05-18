// import {Dispatch} from 'redux'
// import {setAppErrorAC, SetAppErrorActionType} from "../redux/notice-reducer";
//
// export const handleServerAppError = <D>(data: any, dispatch: Dispatch<SetAppErrorActionType >) => {
//     if (data.messages.length) {
//         dispatch(setAppErrorAC(data.messages[0]))
//     } else {
//         dispatch(setAppErrorAC('Some error occurred'))
//     }
//     // dispatch(setAppStatusAC('failed'))
// }
//
// export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch<SetAppErrorActionType >) => {
//     dispatch(setAppErrorAC(error.message ? error.message : 'Some error occurred'))
//     // dispatch(setAppStatusAC('failed'))
// }
