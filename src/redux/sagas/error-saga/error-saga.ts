import { Alert } from 'react-native';
import { AxiosError } from 'axios';

import { IError } from '../../../interfaces/Error.interface';

export function* errorWorker(error: AxiosError<IError>) {
  const statusCode = error.response?.status;
  switch (statusCode) {
    case 404: {
      yield Alert.alert(`Ошибка ${statusCode}`, 'Not found');
      break;
    }
    case 500:
    case 502: {
      yield Alert.alert(`Ошибка ${statusCode}`, 'Bad gateway');
      break;
    }
    case 400: {
      yield Alert.alert(`Ошибка ${statusCode}`, 'Bad request');
      break;
    }
    default: {
      yield Alert.alert('Ошибка', 'error');
      break;
    }
  }
}
