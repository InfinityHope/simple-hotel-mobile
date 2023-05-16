import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';

interface IProps {
  borderColor?: string
  width?: string | number
  placeholder?: string
  name: string
  control: Control<any, any>
  minLength?: number
  isRequired?: boolean
  pattern?: RegExp
}

const Input:FC<IProps> = ({
  borderColor = '#5AC8FA', width = '100%', placeholder,
  pattern, minLength, control, isRequired, name,
}) => (
  <Controller
    rules={{
      required: isRequired,
      minLength,
      pattern
    }}
    render={({ field: { value, onChange }, fieldState: { invalid } }) => (
      <TextInput
        value={value?.toString()}
        onChangeText={(value) => onChange(value)}
        placeholder={placeholder}
        style={[styles.input, { borderColor: invalid ? 'red' : borderColor, width }]}
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
