import {
  Pressable,
  StyleProp, StyleSheet, Text, TextStyle, View
} from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { FC, useState } from 'react';
import DatePicker from 'react-native-date-picker';

import { convertShortDate } from '../../helpers/date';

interface IProps {
  additionalStyle?: StyleProp<TextStyle>
  control: Control<any, unknown>
  name: string
}

type confirmOptions = {
  onChange: (event: unknown) => void
  date: Date
};

const DateTimePicker:FC<IProps> = ({ control, name, additionalStyle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<Date | null>(new Date());

  const handleOpenModalClick = () => setIsOpen(true);

  const handleCloseModalClick = () => setIsOpen(false);

  const confirmHandler = ({ onChange, date }: confirmOptions) => {
    setText(date);
    handleCloseModalClick();
    onChange(convertShortDate(date));
  };

  return (
    <View>
      <Pressable onPress={handleOpenModalClick}>
        <View style={styles.datePicker}>
          <Text>
            {text?.toLocaleDateString('ru-RU')}
          </Text>
        </View>
      </Pressable>

      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <DatePicker
            modal
            open={isOpen}
            date={new Date(value)}
            mode="date"
            locale="ru"
            style={additionalStyle}
            onCancel={handleCloseModalClick}
            onConfirm={(date) => confirmHandler({ onChange, date })}
          />
        )}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    height: 50,
    width: 150,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#5AC8FA',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
  }
});

export default DateTimePicker;
