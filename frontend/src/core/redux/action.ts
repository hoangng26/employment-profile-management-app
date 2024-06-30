import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { initialAppState } from '.';
import { Employee } from '../models/Employee';
import PositionResource from '../models/PositionResource';
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
    SET_POSITION_RESOURCE: (state: AppState, action: PayloadAction<PositionResource[]>) => {
      state.positionResource = action.payload;
    },
    FETCH_EMPLOYEES: () => {},
    FETCH_POSITION_RESOURCE: () => {},
  },
});

export const {
  LOADING_ENABLE,
  LOADING_DISABLE,
  SET_EMPLOYEES,
  FETCH_EMPLOYEES,
  SET_POSITION_RESOURCE,
  FETCH_POSITION_RESOURCE,
} = appSlice.actions;

export const useAppState = () => useSelector((state: RootState) => state.app);
export const useAppDispatch = () => useDispatch<AppDispatch>();
