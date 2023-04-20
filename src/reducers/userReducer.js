import { LOGIN_USER_SUCCESSFUL } from '../constants/user'
import { ActionTypes } from '../constants/action-types';

const initialState = {
  user: {
    id: 1,
    name: "",
    email: "",
    itsregistered: false
  }
}

export default function UserReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'LOGIN_USER_SUCCESSFUL': 
      return state;
    case ActionTypes.I_JUST_REGISTERED:
      return {
        id: 1,
        name: "Djoum Alex",
        itsRegistered: true
      };
    default:
      return state
  }
}