import { all } from 'redux-saga/effects';
import { authWatcher } from './auth-saga/auth-saga';
import { hotelsWatcher } from './hotel-saga/hotel-saga';

export function* rootSaga() {
  yield all([authWatcher(), hotelsWatcher()]);
}
