import { configureStore } from '@reduxjs/toolkit'
import configs from './reducers/configs';

export const store = configureStore({
  reducer: { configs },
});
