import React, { FC } from 'react';
import {
  Pressable, StyleSheet, Text, View
} from 'react-native';

interface IProps {
  title: string
  width?: string | number
  fontWeight?: '400' | '500' | '700'
  onPress?: () => void
}

const CustomButton: FC<IProps> = ({
  title, onPress, width = '100%', fontWeight = '400'
}): JSX.Element => (
  <Pressable onPress={onPress}>
    <View style={styles.btnStyle}>
      <Text style={[styles.textStyle, { width, fontWeight }]}>{title}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  btnStyle: {
    padding: 7,
    height: 50,
    backgroundColor: '#5AC8FA',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400'
  }
});

export default CustomButton;
