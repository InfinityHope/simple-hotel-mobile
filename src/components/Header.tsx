/* eslint-disable max-len */
import { StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';
import LogOut from '../assets/logOut.svg';

interface IProps {
  logoutHandler: () => void
}

export const Header: FC<IProps> = ({ logoutHandler }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Simple Hotel Check</Text>
    <LogOut onPress={logoutHandler} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29
  }
});
