import axios from 'axios';
import { apiService } from './ApiService';

class PositionService {
  async getResource() {
    const url = `${apiService.apiEndpoint}${apiService.apiPosition}/resource`;
    return await axios.get(url);
  }
}

export const positionService = new PositionService();
