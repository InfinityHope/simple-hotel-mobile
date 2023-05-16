import React, { FC } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { IButtonStyles } from '../../interfaces/Styles.interface';

interface IProps {
  title: string
  onPress?: () => void,
  additionalStyles?: IButtonStyles
}

const CustomButton: FC<IProps> = ({
  title, onPress, additionalStyles
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.btnStyle, additionalStyles?.view]}>
      <Text style={[styles.textStyle, additionalStyles?.text]}>{title}</Text>
    </View>
  </TouchableOpacity>
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
