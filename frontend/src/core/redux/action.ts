import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { initialAppState } from '.';
import { AppDispatch, RootState } from './types';

export const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    TEST_ACTION: () => {
      console.log('dispatch test action');
    },
  },
});

export const { TEST_ACTION: TEST_EVENT } = appSlice.actions;

export const useAppState = () => useSelector((state: RootState) => state.app);
export const useAppDispatch = () => useDispatch<AppDispatch>();
