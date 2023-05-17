import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { SceneMap } from 'react-native-tab-view';

import { TabNavigator } from '../../components/TabNavigator';
import { Results } from './tab-scenes/Results';
import { Favorites } from './tab-scenes/Favorites';

export const resultsScene = SceneMap({
  results: Results,
  favorites: Favorites
});

const ResultsScreen = () => {
  const [routes] = useState([
    { key: 'results', title: 'Поиск' },
    { key: 'favorites', title: 'Избранное' }
  ]);

  return (
    <View style={styles.container}>
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
});

export default ResultsScreen;
