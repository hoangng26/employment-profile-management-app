import axios, { AxiosResponse } from 'axios';
import { apiService } from './ApiService';

class EmployeeService {
  async getAllEmployees(): Promise<AxiosResponse> {
    const url = `${apiService.apiEndpoint}${apiService.apiEmployees}`;
    return await axios.get(url);
  }

  async getEmployee(id: number): Promise<AxiosResponse> {
    const url = `${apiService.apiEndpoint}${apiService.apiEmployees}/${id}`;
    return await axios.get(url);
  }
}

export const employeeService = new EmployeeService();
