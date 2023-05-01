import { ActionTypes } from "../constants/action-types";



export const authenticationLoading = () => ({
    type: ActionTypes.LOADING
})

export const authenticationSuccess = (user) => ({
    type: ActionTypes.AUTHENTICATION,
    payload: user
})

export const authenticationError = (error) => ({
    type: ActionTypes.AUTHENTICATION_ERROR,
    payload: error
})

// export const setUser = (user) => {
//     return {
//         type: ActionTypes.I_JUST_REGISTERED,
//         payload: users,
//     };
// };

// export const selectedProduct = (product) => {
//     return {
//         type: ActionTypes.SELECTED_PRODUCT,
//         payload: product,
//     };
// };

// export const selectedProduct = (product) => {
//     return {
//         type: ActionTypes.SELECTED_PRODUCT,
//         payload: product
//     }
// }