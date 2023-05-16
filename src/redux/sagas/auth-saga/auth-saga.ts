import {
  call, put, takeLatest
} from 'redux-saga/effects';
import { removeData, retrieveData, storeData } from '../../../helpers/asyncStorage';
import { setAuth } from '../../reducers/auth-reducer/Auth.slice';
import { removeDataFromStorage, setDataToStorage } from './auth-saga.action';

export function* checkAuthWorker() {
  const isAuth: boolean = yield call(() => retrieveData('authData'));
  if (isAuth) {
    yield put(setAuth());
  }
}

function* setAuthWorker(action: { type: string, payload: boolean }) {
  const isAuth = action.payload;
  try {
    yield call(() => storeData('authData', isAuth));
  } catch (error) {
    console.log(error);
  }
}

function* removeAuthWorker() {
  try {
    yield call(() => removeData('authData'));
  } catch (error) {
    console.log(error);
  }
}

export function* authWatcher() {
  yield takeLatest(setDataToStorage().type, setAuthWorker);
  yield takeLatest(removeDataFromStorage().type, removeAuthWorker);
}
