import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: null,
  user: { name: 'João Gabriel', email: 'jgabrielfes@gmail.com' },
};

export const configsSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {
    setTheme: (state, { payload }) => { state.theme = payload },
    doChangeTheme: (state) => { state.theme = state.theme === 'light' ? 'dark' : 'light' },
    setUser: (state, { payload }) => { state.user = payload },
  },
});

export const { setTheme, doChangeTheme, setUser } = configsSlice.actions;

export default configsSlice.reducer;
