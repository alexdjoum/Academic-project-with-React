
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../reducers/userReducer';


const store = configureStore({
  reducer:{
    user: UserReducer

  }
  
});

export default store;