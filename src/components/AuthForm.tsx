import { Text, View } from 'react-native';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from './ui/Input';
import Button from './ui/Button';
import { IUser } from '../interfaces/Auth.interface';
import { IButtonStyles } from '../interfaces/Styles.interface';
import { getFontStyles } from '../helpers/getFontStyles';
import { emailRegex, passRegex } from '../constants/regex.constants';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setAuth } from '../redux/reducers/auth-reducer/Auth.slice';
import { setDataToStorage } from '../redux/sagas/auth-saga/auth-saga.action';

export const AuthForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<IUser>({ mode: 'onBlur' });
  const dispatch = useAppDispatch();

  const onSubmitHandler: SubmitHandler<IUser> = (data) => {
    if (data.login && data.password) {
      dispatch(setAuth());
      dispatch(setDataToStorage(true));
    }
  };

  return (
    <View style={{ gap: 16 }}>
      <Input
        additionalStyle={{ width: '100%' }}
        isRequired
        pattern={emailRegex}
        placeholder="Логин"
        name="login"
        control={control}
      />

      <Input
        pattern={passRegex}
        isSecurity
        isRequired
        minLength={8}
        placeholder="Пароль"
        name="password"
        control={control}
        additionalStyle={{ width: '100%' }}
      />

      {(errors.login || errors.password) && <Text style={errorText}>Неверные логин или пароль. Повторите попытку</Text>}

      <Button
        additionalStyles={btnStyles}
        onPress={handleSubmit(onSubmitHandler)}
        title="Войти"
      />
    </View>
  );
};

const btnStyles: IButtonStyles = {
  view: {
    width: '100%'
  },
  text: {
    fontWeight: '700'
  }
};

const errorText = getFontStyles({ size: 12, lHeight: 14 });
