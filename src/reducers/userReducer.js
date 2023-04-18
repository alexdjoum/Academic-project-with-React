import { LOGIN_USER_SUCCESSFUL } from '../constants/user'

const initialState = {
  products: [
    {
    id: 1,
    title: "my t-shirt",
    category: "programmer"
    }
  ]
}

export default function UserReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'LOGIN_USER_SUCCESSFUL': 
      return state;
    default:
      return state
  }
}