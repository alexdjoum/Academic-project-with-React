import { ActionTypes } from "../constants/action-types";

export const setUser = (user) => {
    return {
        type: ActionTypes.I_JUST_REGISTERED,
        payload: users,
    };
};

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