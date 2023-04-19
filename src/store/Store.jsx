import { configureStore } from '@reduxjs/toolkit';
import Auth from '../reducers/Auth';

export const Store = configureStore({
  reducer: {
    auth: Auth,
  },
});
