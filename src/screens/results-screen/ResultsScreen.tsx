import {
  Platform, StyleSheet, Text, View
} from 'react-native';
import { useState } from 'react';
import { SceneMap } from 'react-native-tab-view';

import { convertLongDate } from '../../helpers/date';
import { TabNavigator } from '../../components/TabNavigator';
import { Results } from './tab-scenes/Results';
import { Favorites } from './tab-scenes/Favorites';
import SearchIcon from '../../assets/search-normal.svg';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectSearchParams } from '../../redux/reducers/search-params-reducer/SearchParams.selector';
import { getFontStyles } from '../../helpers/getFontStyles';
import { createLabel } from '../../helpers/createLabel';

export const resultsScene = SceneMap({
  results: Results,
  favorites: Favorites
});

const ResultsScreen = () => {
  const { checkIn, nights, location } = useAppSelector(selectSearchParams);
  const [routes] = useState([
    { key: 'results', title: 'Поиск' },
    { key: 'favorites', title: 'Избранное' }
  ]);

  return (
    <View style={styles.container}>
      <View style={[styles.header, paddingTop]}>

        <View style={styles.headerInfo}>
          <SearchIcon style={styles.searchIcon} />

          <Text style={headerInfoText}>
            {`${location}, ${convertLongDate(checkIn)}, ${nights}  ${createLabel(nights, ['ночь', 'ночи', 'ночей'])}`}
          </Text>
        </View>

      </View>
      <TabNavigator
        tabScene={resultsScene}
        routes={routes}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerInfo: {
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderColor: '#5AC8FA',
    borderRadius: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: 17
  },
});

const headerInfoText = getFontStyles({ size: 14, lHeight: 20, color: '#424242' });
const paddingTop = Platform.OS === 'ios' ? { paddingTop: 55 } : { paddingTop: 20 };

export default ResultsScreen;
