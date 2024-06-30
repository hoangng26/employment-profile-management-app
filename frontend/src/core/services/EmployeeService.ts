import axios, { AxiosResponse } from 'axios';
import { Employee } from '../models/Employee';
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

  async createEmployee(employee: Employee): Promise<AxiosResponse> {
    const url = `${apiService.apiEndpoint}${apiService.apiEmployees}`;
    return await axios.post(url, employee);
  }

  async updateEmployee(employee: Employee): Promise<AxiosResponse> {
    const url = `${apiService.apiEndpoint}${apiService.apiEmployees}/${employee.id}`;
    return await axios.patch(url, employee);
  }
}

export const employeeService = new EmployeeService();
