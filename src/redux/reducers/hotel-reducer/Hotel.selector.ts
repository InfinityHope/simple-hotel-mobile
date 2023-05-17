import { RootState } from '../../store';

export const selectHotels = (state: RootState) => state.hotels.hotels;
export const selectFavorites = (state: RootState) => state.hotels.hotels.filter((hotel) => hotel.isFavorite === true);
export const selectIsLoading = (state: RootState) => state.hotels.isLoading;
export const selectError = (state: RootState) => state.hotels.error;
