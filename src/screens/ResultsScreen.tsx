import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { TabNavigator } from '../components/TabNavigator';
import { resultsScene } from '../navigation/TabScenes';

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
