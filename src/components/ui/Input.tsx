import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface IProps {
  borderColor?: string
}

const Input:FC<IProps> = ({ borderColor = '#5AC8FA' }): JSX.Element => (
  <TextInput style={[styles.input, { borderColor }]} />
);

const styles = StyleSheet.create({
  input: {
    width: 310,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10
  }
});

export default Input;
