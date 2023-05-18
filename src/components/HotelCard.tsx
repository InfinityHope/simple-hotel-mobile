import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { RatingBar } from './RatingBar';
import { getFontStyles } from '../helpers/getFontStyles';
import { truncateString } from '../helpers/truncateString';
import { formatPrice } from '../helpers/formatPrice';
import { IHotel } from '../interfaces/Hotel.interface';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useIsFavorite } from '../hooks/useIsFavorite';
import { setFavorite } from '../redux/reducers/hotel-reducer/Hotel.slice';

import HotelIcon from '../assets/hotel-item.svg';
import FavoriteIcon from '../assets/favorite.svg';

export const HotelCard: FC<IHotel> = (hotel) => {
  const {
    hotelId, hotelName, stars, priceAvg
  } = hotel;
  const dispatch = useAppDispatch();
  const isFavorite = useIsFavorite(hotelId);

  const handleAddToFavoriteClick = () => {
    dispatch(setFavorite(hotel));
  };

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardTop}>
        <HotelIcon />

        <View style={styles.cardTopBody}>

          <View style={styles.cardTopHeader}>
            <Text style={cardTitle}>{truncateString(hotelName, 20)}</Text>

            <FavoriteIcon
              onPress={handleAddToFavoriteClick}
              fill={isFavorite ? 'red' : '#fff'}
            />
          </View>

          <View style={styles.cardTopFooter}>
            <RatingBar stars={stars} />

            <Text style={cardRoomsText}>Осталось 3 комнаты</Text>
          </View>

        </View>
      </View>

      <View style={styles.cardDivider} />

      <View style={styles.cardBottom}>
        <View style={styles.cardBottomBody}>

          <Text style={cardPriceLeft}>Цена за ночь: </Text>

          <Text style={cardPriceRight}>
            {`${formatPrice(priceAvg)} ₽`}
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
  cardDivider: {
    height: 1,
    width: '100%',
    backgroundColor: '#F4F4F4'
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardTopBody: {
    justifyContent: 'space-between',
    width: '75%'
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
  },
  cardBottomBody: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
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
