
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../reducers/userReducer';
import { combineReducers } from '@reduxjs/toolkit';


const store = configureStore({
  reducer:{
    user: UserReducer

  }
  
});

export default store;