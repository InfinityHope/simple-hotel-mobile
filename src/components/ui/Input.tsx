import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import {
  KeyboardType,
  StyleProp, StyleSheet, TextInput, TextStyle
} from 'react-native';

interface IProps {
  additionalStyle?: StyleProp<TextStyle>
  placeholder?: string
  name: string
  control: Control<any, unknown>
  minLength?: number
  isRequired?: boolean
  isSecurity?:boolean
  pattern?: RegExp
  type?: KeyboardType
}

const Input:FC<IProps> = ({
  additionalStyle, placeholder, type,
  pattern, minLength, control, isRequired, name, isSecurity
}) => (
  <Controller
    rules={{
      required: isRequired,
      minLength,
      pattern
    }}
    render={({ field: { value, onChange }, fieldState: { invalid } }) => (
      <TextInput
        keyboardType={type}
        secureTextEntry={isSecurity}
        value={value?.toString()}
        onChangeText={(value) => onChange(value)}
        placeholder={placeholder}
        style={[styles.input, {
          borderColor: invalid ? 'red' : '#5AC8FA'
        }, additionalStyle]}
      />
    )}
    name={name}
    control={control}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
  }
});

export default Input;
