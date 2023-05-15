import { combineReducers } from '@reduxjs/toolkit';

import hotelReducer from './hotel-reducer/Hotel.slice';
import authReducer from './auth-reducer/Auth.slice';
import SearchParamsReducer from './search-params-reducer/SearchParams.slice';

export const rootReducer = combineReducers({
  hotels: hotelReducer,
  auth: authReducer,
  searchParams: SearchParamsReducer
});
