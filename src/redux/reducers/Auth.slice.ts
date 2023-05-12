import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
  login: string
  isAuth: boolean
}

const initialState: IState = {
  login: '',
  isAuth: false
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.login = action.payload;
    }
  }
});

export default AuthSlice.reducer;
export const { setAuth } = AuthSlice.actions;
