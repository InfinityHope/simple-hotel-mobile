import { call, put, takeLatest } from 'typed-redux-saga';
import { PayloadAction } from '@reduxjs/toolkit';

import { removeData, retrieveData, storeData } from '../../../helpers/asyncStorage';
import { setAuth } from '../../reducers/auth-reducer/Auth.slice';
import { removeDataFromStorage, setDataToStorage } from './auth-saga.action';

export function* checkAuthWorker() {
  const isAuth: boolean = yield call(() => retrieveData('authData'));
  if (isAuth) {
    yield* put(setAuth());
  }
}

function* setAuthWorker(action: PayloadAction<boolean>) {
  const isAuth = action.payload;
  try {
    yield* call(() => storeData('authData', isAuth));
  } catch (error: unknown) {
    console.log(error);
  }
}

function* removeAuthWorker() {
  try {
    yield* call(() => removeData('authData'));
  } catch (error: unknown) {
    console.log(error);
  }
}

export function* authWatcher() {
  yield* takeLatest(setDataToStorage().type, setAuthWorker);
  yield* takeLatest(removeDataFromStorage().type, removeAuthWorker);
}
