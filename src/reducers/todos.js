// import { ADD_TODO, TOGGLE_TODO } from '../constants/todos'

// const initialState = []

// export default function todosReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO: {
//       return state.concat({
//         id: action.id,
//         text: action.text,
//         completed: false
//       })
//     }
//     case TOGGLE_TODO: {
//       return state.map(todo => {
//         if (todo.id !== action.id) {
//           return todo
//         }

//         return {
//           ...todo,
//           completed: !todo.completed
//         }
//       })
//     }
//     default:
//       return state
//   }
// }