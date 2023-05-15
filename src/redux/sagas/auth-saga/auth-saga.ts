import { call, put, takeEvery } from 'redux-saga/effects';
import { retrieveData, storeData } from '../../../helpers/asyncStorage';
import { setAuth } from '../../reducers/Auth.slice';
import { setDataToStorage } from './auth-saga.action';
import { IAuth } from '../../../interfaces/Auth.interface';

export function* checkAuthWorker() {
  const authData: IAuth = yield call(() => retrieveData('authData'));
  if (authData) {
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

export function* authWatcher() {
  yield takeEvery(setDataToStorage().type, setAuthWorker);
}
