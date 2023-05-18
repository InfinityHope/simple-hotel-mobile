import { FC, useState } from 'react';
import { TabBar, TabView } from 'react-native-tab-view';
import { StyleProp, StyleSheet } from 'react-native';

import { getFontStyles } from '../helpers/getFontStyles';

interface IProps {
  routes: { key: string, title: string }[]
  tabScene: any
}

const renderTabBar = (props: StyleProp<any>) => (
  <TabBar
    {...props}
    labelStyle={tabLabel}
    indicatorStyle={styles.tabBarIndicator}
    tabStyle={{ marginVertical: 15 }}
    style={styles.tabBar}
    indicatorContainerStyle={styles.tabBarIndicatorContainer}
  />
);

export const TabNavigator: FC<IProps> = ({ tabScene, routes }) => {
  const [index, setIndex] = useState(0);

  return (
    <TabView
      renderScene={tabScene}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 24,
  },
  tabBarIndicator: {
    backgroundColor: '#5AC8FA',
    height: 3
  },
  tabBarIndicatorContainer: {
    marginBottom: 20,
    width: '50%',
    marginHorizontal: 50,
  }
});

const tabLabel = getFontStyles({ size: 14, lHeight: 22, color: '#000' });
