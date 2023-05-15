import { createSlice } from '@reduxjs/toolkit';

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
    setAuth: (state) => {
      state.isAuth = true;
    },
    logOut: (state) => {
      state.isAuth = false;
    }
  }
});

export default AuthSlice.reducer;
export const { setAuth, logOut } = AuthSlice.actions;
