import axios from 'axios';
import { apiService } from './ApiService';

class ToolLanguageService {
  async deleteToolLanguage(id: number) {
    const url = `${apiService.apiEndpoint}${apiService.apiToolLanguage}/${id}`;
    return await axios.delete(url);
  }
}

export const toolLanguageService = new ToolLanguageService();
