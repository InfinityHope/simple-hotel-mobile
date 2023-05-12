import React, { FC } from 'react';
import {
  Pressable, StyleSheet, Text, View
} from 'react-native';

interface IProps {
  title: string
  onPress?: () => void
}

const CustomButton: FC<IProps> = ({ title, onPress }): JSX.Element => (
  <Pressable onPress={onPress}>
    <View style={styles.btnStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  btnStyle: {
    padding: 7,
    width: 343,
    height: 50,
    backgroundColor: '#5AC8FA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400'
  }
});

export default CustomButton;
