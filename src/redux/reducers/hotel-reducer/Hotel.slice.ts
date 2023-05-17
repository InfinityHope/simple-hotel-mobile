import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IHotel } from '../../../interfaces/Hotel.interface';

interface IState {
  hotels: IHotel[],
  favorites: IHotel[],
  isLoading: boolean,
}

const initialState: IState = {
  hotels: [],
  favorites: [],
  isLoading: false,
};

const HotelSlice = createSlice({
  name: 'HotelSlice',
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<IHotel>) => {
      const candidate = state.favorites.find((hotel) => hotel.hotelId === action.payload.hotelId);
      if (!candidate) {
        state.favorites = [...state.favorites, { ...action.payload, isFavorite: true }];
      } else {
        state.favorites = state.favorites.filter((hotel) => hotel.hotelId !== action.payload.hotelId);
      }
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setHotels: (state, action: PayloadAction<IHotel[]>) => {
      state.hotels = action.payload;
    },
    sortFavorites: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case 'rating': {
          state.favorites = state.favorites.sort((a, b) => b.stars - a.stars);
          break;
        }
        case 'price': {
          state.favorites = state.favorites.sort((a, b) => b.priceAvg - a.priceAvg);
          break;
        }
        default: {
          return state;
        }
      }
    }

  }
});

export default HotelSlice.reducer;
export const {
  setIsLoading, setHotels, setFavorite, sortFavorites
} = HotelSlice.actions;
