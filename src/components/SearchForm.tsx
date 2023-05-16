import { StyleSheet, View, Text } from 'react-native';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from './ui/Input';
import CustomButton from './ui/Button';

import { ISearchParams } from '../interfaces/SearchParams';
import { convertShortDate } from '../helpers/date';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchHotels } from '../redux/sagas/hotel-saga/hotel-saga.actions';

import Calendar from '../assets/calendar.svg';
import Clock from '../assets/clock.svg';

export const SearchForm = () => {
  const { control, handleSubmit } = useForm<ISearchParams>({
    defaultValues: {
      location: 'Москва',
      checkIn: convertShortDate(new Date()),
      nights: 1
    }
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ISearchParams> = (data) => {
    dispatch(fetchHotels(data));
  };

  return (
    <View style={styles.searchForm}>
      <Text style={styles.searchFormTitle}>Куда едем? </Text>

      <Input name="location" placeholder="Локация" control={control} />

      <View style={styles.searchFormInputGroup}>
        <View style={styles.inputSection}>
          <Input
            additionalStyle={{
              width: 150
            }}
            name="checkIn"
            placeholder="Дата"
            control={control}
          />

          <Calendar style={styles.inputIcon} />
        </View>

        <View style={styles.inputSection}>
          <Input
            additionalStyle={{
              width: 150
            }}
            type="numeric"
            name="nights"
            placeholder="Кол-во дней"
            control={control}
          />

          <Clock style={styles.inputIcon} />
        </View>
      </View>

      <CustomButton onPress={handleSubmit(onSubmit)} title="Найти" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchForm: {
    padding: 16,
    gap: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    borderRadius: 16,
  },
  searchFormTitle: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
  },
  searchFormInputGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    right: 20
  }
});
