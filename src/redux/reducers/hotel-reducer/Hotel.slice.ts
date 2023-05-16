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
    setFavorite: (state, action: PayloadAction<number>) => {
      state.hotels = state.hotels.map((hotel) => (hotel.hotelId === action.payload ? { ...hotel, isFavorite: !hotel.isFavorite } : hotel));
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getHotelsFullfiled: (state, action: PayloadAction<IHotel[]>) => {
      state.hotels = action.payload.map((hotel) => ({ ...hotel, isFavorite: false }));
    },
    getHotelsRejected: (state, action:PayloadAction<string>) => {
      state.error = action.payload;
    }
  }
});

export default HotelSlice.reducer;
export const {
  setIsLoading, getHotelsRejected, getHotelsFullfiled, setFavorite
} = HotelSlice.actions;
