import { Employee } from '../models/Employee';
import { Photo } from '../models/Photo';
import store from './store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface AppState {
  employees: Employee[];
  photos: Photo[];
  loading: boolean;
}
