import { combineReducers } from '@reduxjs/toolkit';
import hotelReducer from './Hotel.slice';
import authReducer from './Auth.slice';
import SearchParamsReducer from './SearchParams.slice';

export const rootReducer = combineReducers({
  hotels: hotelReducer,
  auth: authReducer,
  searchParams: SearchParamsReducer
});
