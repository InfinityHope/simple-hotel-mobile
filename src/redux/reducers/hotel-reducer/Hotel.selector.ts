import { RootState } from '../../store';

export const selectHotels = (state: RootState) => state.hotels.hotels;
export const selectFavorites = (state: RootState) => state.hotels.favorites;
export const selectIsLoading = (state: RootState) => state.hotels.isLoading;
