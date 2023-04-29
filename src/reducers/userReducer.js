import { LOGIN_USER_SUCCESSFUL } from '../constants/user'
import { ActionTypes } from '../constants/action-types';

const initialState = {
  content: null,
  loading: false,
  error: null
}

export default function UserReducer(state = initialState, {type, payload}){
  switch (type) {
    case ActionTypes.LOADING:
      return {
        content: null,
        loading: true,
        error: null
      }
    case ActionTypes.REGISTER:
      return {
        ...state,
        content: payload,
        
      }
      default:
        return state
  }
}

// export default function UserReducer(state = initialState, {type, payload}) {
//   switch (type) {
//     case 'LOGIN_USER_SUCCESSFUL': 
//       return state;
//     case ActionTypes.I_JUST_REGISTERED:
//       return {
//         id: 1,
//         name: "Djoum Alex",
//         itsRegistered: true
//       };
//     case ActionTypes.I_DO_DISAPPEAR_MODAL: 
//       return {
//         iDoDisappearModal: true
//       };
//     case ActionTypes.WHEN_MODAL_DO_DISAPPEAR: 
//       return {
//         whenModalAppearDoDisappear : true
//       }
//     default:
//       return state
//   }
// }