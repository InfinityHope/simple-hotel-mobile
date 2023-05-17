import React from 'react';
import { HotelList } from '../../../components/HotelList';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectFavorites } from '../../../redux/reducers/hotel-reducer/Hotel.selector';

export const Favorites = () => {
  const favorites = useAppSelector(selectFavorites);

  return (
    <HotelList hotels={favorites} />
  );
};
