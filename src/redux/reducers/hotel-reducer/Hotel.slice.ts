import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IHotel } from '../../../interfaces/Hotel.interface';

interface IState {
  hotels: IHotel[],
  isLoading: boolean,
  error: string
}

const initialState: IState = {
  hotels: [],
  isLoading: false,
  error: ''
};

const HotelSlice = createSlice({
  name: 'HotelSlice',
  initialState,
  reducers: {
    getHotelsPending: (state) => {
      state.isLoading = true;
    },
    getHotelsFullfiled: (state, action: PayloadAction<IHotel[]>) => {
      state.hotels = action.payload;
      state.isLoading = false;
    },
    getHotelsRejected: (state, action:PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export default HotelSlice.reducer;
export const { getHotelsPending, getHotelsRejected, getHotelsFullfiled } = HotelSlice.actions;
