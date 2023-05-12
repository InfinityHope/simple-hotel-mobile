import { combineReducers } from '@reduxjs/toolkit';
import hotelReducer from './Hotel.slice';
import authReducer from './Auth.slice';

export const rootReducer = combineReducers({
  hotesls: hotelReducer,
  auth: authReducer
});
