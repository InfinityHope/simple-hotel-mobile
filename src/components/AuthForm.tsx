import React, { FC } from 'react';
import { View } from 'react-native';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from './ui/Input';
import Button from './ui/Button';
import { IUser } from '../interfaces/Auth.interface';
import { emailRegex, passRegex } from '../constants/regex.constants';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setAuth } from '../redux/reducers/Auth.slice';
import { setDataToStorage } from '../redux/sagas/auth-saga/auth-saga.action';

interface IProps {
  onLogin: () => void
}

export const AuthForm: FC<IProps> = ({ onLogin }) => {
  const { control, handleSubmit } = useForm<IUser>({
    mode: 'onBlur'
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    if (data.login && data.password) {
      dispatch(setAuth(data.login));
      dispatch(setDataToStorage({ login: data.login, isAuth: true }));
      onLogin();
    }
  };

  return (
    <View style={{ gap: 16 }}>
      <Input required pattern={emailRegex} placeholder="Логин" name="login" control={control} />

      <Input
        pattern={passRegex}
        required
        minLength={8}
        placeholder="Пароль"
        name="password"
        control={control}
      />

      <Button onPress={handleSubmit(onSubmit)} fontWeight="700" title="Войти" />
    </View>
  );
};
