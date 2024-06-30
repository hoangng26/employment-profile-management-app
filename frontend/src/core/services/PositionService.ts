import axios from 'axios';
import { apiService } from './ApiService';

class PositionService {
  async getResource() {
    const url = `${apiService.apiEndpoint}${apiService.apiPosition}/resource`;
    return await axios.get(url);
  }

  async deletePosition(id: number) {
    const url = `${apiService.apiEndpoint}${apiService.apiPosition}/${id}`;
    return await axios.delete(url);
  }
}

export const positionService = new PositionService();
