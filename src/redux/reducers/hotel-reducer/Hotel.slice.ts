import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IHotel } from '../../../interfaces/Hotel.interface';

interface IState {
  hotels: IHotel[],
  favorites: IHotel[],
  isLoading: boolean,
  error: string
}

const initialState: IState = {
  hotels: [],
  favorites: [],
  isLoading: false,
  error: ''
};

const HotelSlice = createSlice({
  name: 'HotelSlice',
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<IHotel>) => {
      const candidate = state.favorites.find((hotel) => hotel.hotelId === action.payload.hotelId);
      if (!candidate) {
        state.favorites = [...state.favorites, action.payload];
      } else {
        state.favorites = state.favorites.filter((hotel) => hotel.hotelId !== action.payload.hotelId);
      }
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
