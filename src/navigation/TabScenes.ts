import { SceneMap } from 'react-native-tab-view';
import { FavoritesList } from '../components/FavoritesList';
import { HotelList } from '../components/HotelList';

export const resultsScene = SceneMap({
  results: HotelList,
  favorites: FavoritesList
});
