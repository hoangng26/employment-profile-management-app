import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { initialAppState } from '.';
import { Employee } from '../models/Employee';
import { Photo } from '../models/Photo';
import { AppDispatch, AppState, RootState } from './types';

export const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    LOADING_ENABLE: (state: AppState) => {
      state.loading = true;
    },
    LOADING_DISABLE: (state: AppState) => {
      state.loading = false;
    },
    SET_EMPLOYEES: (state: AppState, action: PayloadAction<Employee[]>) => {
      state.employees = [...action.payload];
    },
    SET_PHOTOS: (state: AppState, action: PayloadAction<Photo[]>) => {
      state.photos = [...action.payload];
    },
    FETCH_EMPLOYEES: () => {},
    FETCH_PHOTOS: () => {},
  },
});

export const { LOADING_ENABLE, LOADING_DISABLE, SET_EMPLOYEES, SET_PHOTOS, FETCH_EMPLOYEES, FETCH_PHOTOS } =
  appSlice.actions;

export const useAppState = () => useSelector((state: RootState) => state.app);
export const useAppDispatch = () => useDispatch<AppDispatch>();
