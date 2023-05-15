import { call, put, takeEvery } from 'redux-saga/effects';
import { ISearchParams } from '../../../interfaces/SearchParams';
import { getHotelsFullfiled, getHotelsPending, getHotelsRejected } from '../../reducers/hotel-reducer/Hotel.slice';
import { IHotel } from '../../../interfaces/Hotel.interface';
import { HotelService } from '../../../services/hotel.service';
import { fetchHotels } from './hotel-saga.actions';

export function* getHotelsWorker(action: { type: string; payload: ISearchParams }) {
  const { location, nights, checkIn } = action.payload;
  yield put(getHotelsPending());
  try {
    const data: IHotel[] = yield call(HotelService.getHotels, location, nights, checkIn);
    yield put(getHotelsFullfiled(data));
  } catch (e: any) {
    yield put(getHotelsRejected(e.message as string));
  }
}

export function* hotelsWatcher() {
  yield takeEvery(fetchHotels().type, getHotelsWorker);
}
