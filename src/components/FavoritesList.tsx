import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { HotelCard } from './HotelCard';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectFavorites } from '../redux/reducers/hotel-reducer/Hotel.selector';

export const FavoritesList = () => {
  const favorites = useAppSelector(selectFavorites);

  return (
    <View>
      {favorites.length !== 0 ? (
        <FlatList
          scrollEnabled
          keyExtractor={(item) => item.hotelId.toString()}
          data={favorites}
          renderItem={({ item }) => <HotelCard {...item} />}
        />
      ) : <Text style={{ justifyContent: 'center' }}>В Избранном пусто.</Text>}
    </View>
  );
};
