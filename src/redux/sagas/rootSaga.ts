import { all, call } from 'redux-saga/effects';
import { authWatcher, checkAuthWorker } from './auth-saga/auth-saga';
import { hotelsWatcher } from './hotel-saga/hotel-saga';

export function* rootSaga() {
  yield call(checkAuthWorker);
  yield all([authWatcher(), hotelsWatcher()]);
}
