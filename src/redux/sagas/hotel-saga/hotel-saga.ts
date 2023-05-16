import { call, put, takeEvery } from 'redux-saga/effects';

import { ISearchParams } from '../../../interfaces/SearchParams';
import { IHotel } from '../../../interfaces/Hotel.interface';

import { HotelService } from '../../../services/hotel.service';

import { getHotelsFullfiled, getHotelsRejected, setIsLoading } from '../../reducers/hotel-reducer/Hotel.slice';

import { fetchHotels } from './hotel-saga.actions';

export function* getHotelsWorker(action: { type: string; payload: ISearchParams }) {
  const { location, nights, checkIn } = action.payload;
  yield put(setIsLoading(true));

  try {
    const data: IHotel[] = yield call(HotelService.getHotels, location, nights, checkIn);
    yield put(getHotelsFullfiled(data));
  } catch (e: unknown) {
    if (e instanceof Error) {
      yield put(getHotelsRejected(e.message as string));
    }
  } finally {
    yield put(setIsLoading(false));
  }
}

export function* hotelsWatcher() {
  yield takeEvery(fetchHotels().type, getHotelsWorker);
}
