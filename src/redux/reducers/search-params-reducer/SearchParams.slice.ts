import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { convertShortDate } from '../../../helpers/date';

import { ISearchParams } from '../../../interfaces/SearchParams';

interface IState {
  location: string,
  nights: number,
  checkIn: string
}

const initialState: IState = {
  location: 'Москва',
  nights: 1,
  checkIn: convertShortDate(new Date())
};

const SearchParams = createSlice({
  name: 'SearchParams',
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<ISearchParams>) => {
      state.checkIn = action.payload.checkIn;
      state.location = action.payload.location;
      state.nights = action.payload.nights;
    }
  }
});

export default SearchParams.reducer;
export const { setSearchParams } = SearchParams.actions;
