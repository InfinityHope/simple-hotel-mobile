import { HotelList } from '../../../components/HotelList';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectHotels } from '../../../redux/reducers/hotel-reducer/Hotel.selector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { fetchHotels } from '../../../redux/sagas/hotel-saga/hotel-saga.actions';
import { selectSearchParams } from '../../../redux/reducers/search-params-reducer/SearchParams.selector';

export const Results = () => {
  const hotels = useAppSelector(selectHotels);
  const searchParams = useAppSelector(selectSearchParams);
  const dispatch = useAppDispatch();

  const handleGetHotelsRefresh = () => {
    dispatch(fetchHotels(searchParams));
  };

  return (
    <HotelList hotels={hotels} handleOnRefresh={handleGetHotelsRefresh} />
  );
};
