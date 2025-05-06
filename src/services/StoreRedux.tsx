import {configureStore} from '@reduxjs/toolkit';
import homeReducer from '@src/modules/home/slices/homeSlice';
import reactotron from 'reactotron-react-native';
import {} from 'redux';

const rootReducer = {
  homeReducer: homeReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
