import { IAuth } from '../../../interfaces/Auth.interface';

export const getDataFromStorage = () => ({ type: 'GET_DATA_FROM_STORAGE' });
export const setDataToStorage = (payload?: IAuth) => ({ type: 'SET_DATA_TIO_STORAGE', payload });
