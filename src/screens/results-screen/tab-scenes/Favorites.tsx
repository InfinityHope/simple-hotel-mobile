import { View } from 'react-native';

import { HotelList } from '../../../components/HotelList';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectFavorites } from '../../../redux/reducers/hotel-reducer/Hotel.selector';
import { SortBlock } from '../../../components/SortBlock';

export const Favorites = () => {
  const favorites = useAppSelector(selectFavorites);

  return (
    <View style={{ flex: 1, gap: 24 }}>
      <SortBlock />

      <HotelList hotels={favorites} />
    </View>
  );
};
