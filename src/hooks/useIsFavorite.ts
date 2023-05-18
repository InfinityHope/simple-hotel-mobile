import { selectFavorites } from '../redux/reducers/hotel-reducer/Hotel.selector';
import { useAppSelector } from './useAppSelector';

export const useIsFavorite = (id: number) => {
  const favorites = useAppSelector(selectFavorites);
  return favorites.some((hotel) => hotel.hotelId === id);
};
