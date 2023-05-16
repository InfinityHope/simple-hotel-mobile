import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { RatingBar } from './RatingBar';

import { getFontStyles } from '../helpers/getFontStyles';
import { truncateString } from '../helpers/truncateString';

import { IHotel } from '../interfaces/Hotel.interface';

import HotelIcon from '../assets/hotel-item.svg';
import FavoriteIcon from '../assets/favorite.svg';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setFavorite } from '../redux/reducers/hotel-reducer/Hotel.slice';

export const HotelCard: FC<IHotel> = ({
  hotelId, hotelName, priceAvg, stars, isFavorite
}) => {
  const dispatch = useAppDispatch();

  const favoriteHandler = () => {
    dispatch(setFavorite(hotelId));
  };

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardTop}>
        <HotelIcon />

        <View style={{ justifyContent: 'space-between', width: '75%' }}>

          <View style={styles.cardTopHeader}>
            <Text style={cardTitle}>{truncateString(hotelName, 20)}</Text>

            <FavoriteIcon onPress={favoriteHandler} fill={isFavorite ? 'red' : '#fff'} />
          </View>

          <View style={styles.cardTopFooter}>
            <RatingBar stars={stars} />

            <Text style={cardRoomsText}>Осталось 3 комнаты</Text>
          </View>

        </View>
      </View>

      <View style={{ height: 1, width: '100%', backgroundColor: '#F4F4F4' }} />

      <View style={styles.cardBottom}>
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>

          <Text style={cardPriceLeft}>Цена за ночь: </Text>

          <Text style={cardPriceRight}>
            {priceAvg.toFixed(0)}
            {' '}
            ₽
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    gap: 8,
    marginBottom: 16
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardTopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTopFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

const cardTitle = getFontStyles({
  size: 15, weight: '700', lHeight: 22, color: '#000'
});
const cardPriceLeft = getFontStyles({
  size: 13, weight: '400', lHeight: 22, color: '#878787'
});
const cardPriceRight = getFontStyles({
  size: 17, weight: '400', lHeight: 22, color: '#000'
});
const cardRoomsText = getFontStyles({
  size: 13, weight: '400', lHeight: 22, color: '#878787'
});
