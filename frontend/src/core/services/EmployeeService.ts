import axios, { AxiosResponse } from 'axios';
import { apiService } from './ApiService';

class EmployeeService {
  async getAllEmployees(): Promise<AxiosResponse> {
    const url = `${apiService.apiEndpoint}${apiService.apiEmployees}`;
    return await axios.get(url);
  }

  async getAllPhotos(): Promise<AxiosResponse> {
    const url = `${apiService.apiEndpoint}${apiService.apiPhotos}`;
    return await axios.get(url);
  }
}

export const employeeService = new EmployeeService();
