import { LOGIN_USER_SUCCESSFUL } from '../constants/user'

const initialState = []

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESSFUL: {
      return state.concat({
        id: action.id,
        text: action.text,
        completed: false
      })
    }
    
    default:
      return state
  }
}