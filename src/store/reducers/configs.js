import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: null,
  user: null,
};

export const configsSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {
    setTheme: (state, { payload }) => { state.theme = payload },
    doChangeTheme: (state) => {
      const theme = state.theme === 'light' ? 'dark' : 'light';
      AsyncStorage.setItem('theme', theme);
      state.theme = theme;
    },
    setUser: (state, { payload }) => {
      if (!payload) {
        AsyncStorage.removeItem('user');
      } else {
        AsyncStorage.setItem('user', JSON.stringify(payload));
      }
      state.user = payload;
    },
  },
});

export const { setTheme, doChangeTheme, setUser } = configsSlice.actions;

export default configsSlice.reducer;
