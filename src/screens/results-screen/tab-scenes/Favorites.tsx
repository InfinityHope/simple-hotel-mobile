import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Pressable
} from 'react-native';

import { HotelList } from '../../../components/HotelList';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectFavorites } from '../../../redux/reducers/hotel-reducer/Hotel.selector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { sortFavorites } from '../../../redux/reducers/hotel-reducer/Hotel.slice';

import SelectSVG from '../../../assets/select.svg';

export const Favorites = () => {
  const favorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();
  const [sortByRating, setSortByRating] = useState<boolean>(true);
  const [sortByPrice, setSortByPrice] = useState<boolean>(false);

  const handleChangeRating = () => {
    if (sortByRating) return;
    setSortByRating((prev) => (prev !== true));
    setSortByPrice(false);
    dispatch(sortFavorites('rating'));
  };

  const handleChangePrice = () => {
    if (sortByPrice) return;
    setSortByPrice((prev) => (prev !== true));
    setSortByRating(false);
    dispatch(sortFavorites('price'));
  };

  return (
    <View style={{ flex: 1, gap: 24 }}>
      <View style={styles.sortBlock}>
        <Text>Сортировать по</Text>

        <View style={styles.sortButtons}>

          <Pressable onPress={handleChangeRating}>
            <View style={[styles.sortButton, sortByRating && styles.sortButtonActive]}>
              <Text style={sortByRating ? { color: '#fff' } : { color: '#99A0A3' }}>Рейтинг</Text>

              <SelectSVG fill={sortByRating ? '#fff' : '#99A0A3'} />
            </View>
          </Pressable>

          <Pressable onPress={handleChangePrice}>
            <View style={[styles.sortButton, sortByPrice && styles.sortButtonActive]}>
              <Text style={sortByPrice ? { color: '#fff' } : { color: '#99A0A3' }}>Цена</Text>

              <SelectSVG fill={sortByPrice ? '#fff' : '#99A0A3'} />
            </View>
          </Pressable>

        </View>
      </View>

      <HotelList hotels={favorites} />
    </View>
  );
};

const styles = StyleSheet.create({
  sortBlock: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sortButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sortButton: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    backgroundColor: '#fff',
    color: '#99A0A3',
    borderRadius: 10
  },
  sortButtonActive: {
    color: '#fff',
    backgroundColor: '#5AC8FA'
  },
});
