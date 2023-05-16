import { StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/MainNavigation';

import SearchIcon from '../assets/search-normal.svg';
import { HotelList } from '../components/HotelList';
import { getFontStyles } from '../helpers/getFontStyles';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectSearchParams } from '../redux/reducers/search-params-reducer/SearchParams.selector';
import { convertLongDate } from '../helpers/date';

type ResultsScreenProps = NativeStackScreenProps<RootStackParamList, 'Results'>;

const ResultsScreen = ({ navigation }: ResultsScreenProps) => {
  const { checkIn, nights, location } = useAppSelector(selectSearchParams);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>

          <SearchIcon style={styles.searchIcon} />

          <Text style={[styles.headerInfo, headerInfo]}>
            {`${location}, ${convertLongDate(checkIn)}, ${nights} ночь`}
          </Text>

        </View>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <HotelList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    backgroundColor: '#F4F4F4',
  },
  header: {
    height: 169,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: 17
  },
  headerInfo: {
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderColor: '#5AC8FA',
    borderRadius: 16,
  }
});

const headerInfo = getFontStyles({ size: 14, lHeight: 20, color: '#424242' });

export default ResultsScreen;
