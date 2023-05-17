import { call, put, takeEvery } from 'typed-redux-saga';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ISearchParams } from '../../../interfaces/SearchParams';
import { HotelService } from '../../../services/hotel.service';
import { setHotels, setIsLoading } from '../../reducers/hotel-reducer/Hotel.slice';
import { fetchHotels } from './hotel-saga.actions';
import { errorWorker } from '../error-saga/error-saga';
import { IError } from '../../../interfaces/Error.interface';

export function* getHotelsWorker(action: PayloadAction<ISearchParams>) {
  const { location, nights, checkIn } = action.payload;
  yield* put(setIsLoading(true));

  try {
    const data = yield* call(HotelService.getHotels, location, nights, checkIn);
    yield* put(setHotels(data));
  } catch (e: unknown) {
    yield* call(() => errorWorker(e as AxiosError<IError>));
  } finally {
    yield* put(setIsLoading(false));
  }
}

export function* hotelsWatcher() {
  yield* takeEvery(fetchHotels().type, getHotelsWorker);
}
