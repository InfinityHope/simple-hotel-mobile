import { StyleSheet, View, Text } from 'react-native';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FC } from 'react';

import Input from './ui/Input';
import CustomButton from './ui/Button';
import DateTimePicker from './ui/DateTimePicker';
import { ISearchParams } from '../interfaces/SearchParams';
import { convertShortDate } from '../helpers/date';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setSearchParams } from '../redux/reducers/search-params-reducer/SearchParams.slice';
import { fetchHotels } from '../redux/sagas/hotel-saga/hotel-saga.actions';

import Clock from '../assets/clock.svg';
import Calendar from '../assets/calendar.svg';

interface IProps {
  navigateToResults: () => void
}

export const SearchForm: FC<IProps> = ({ navigateToResults }) => {
  const { control, handleSubmit } = useForm<ISearchParams>({
    defaultValues: {
      location: 'Москва',
      checkIn: convertShortDate(new Date()),
      nights: 1
    }
  });
  const dispatch = useAppDispatch();

  const handleSubmitClick: SubmitHandler<ISearchParams> = (data) => {
    dispatch(fetchHotels(data));
    dispatch(setSearchParams(data));
    navigateToResults();
  };

  return (
    <View style={styles.searchForm}>
      <Text style={styles.searchFormTitle}>Куда едем? </Text>

      <Input
        name="location"
        placeholder="Локация"
        control={control}
      />

      <View style={styles.searchFormInputGroup}>
        <View style={styles.inputSection}>
          <DateTimePicker
            name="checkIn"
            control={control}
          />

          <Calendar style={styles.inputIcon} />
        </View>

        <View style={styles.inputSection}>
          <Input
            additionalStyle={{
              width: 150
            }}
            type="number-pad"
            name="nights"
            placeholder="Кол-во дней"
            control={control}
          />

          <Clock style={styles.inputIcon} />
        </View>
      </View>

      <CustomButton
        onPress={handleSubmit(handleSubmitClick)}
        title="Найти"
      />
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
    marginHorizontal: 16,
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
    right: 10
  }
});
