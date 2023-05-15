import React from 'react';
import { View } from 'react-native';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from './ui/Input';
import Button from './ui/Button';
import { IUser } from '../interfaces/Auth.interface';
import { emailRegex, passRegex } from '../constants/regex.constants';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setAuth } from '../redux/reducers/auth-reducer/Auth.slice';
import { setDataToStorage } from '../redux/sagas/auth-saga/auth-saga.action';

export const AuthForm = (): JSX.Element => {
  const { control, handleSubmit } = useForm<IUser>({
    mode: 'onBlur'
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    if (data.login && data.password) {
      dispatch(setAuth());
      dispatch(setDataToStorage(true));
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
