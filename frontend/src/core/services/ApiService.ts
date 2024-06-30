class ApiService {
  readonly apiEndpoint: string;
  readonly apiEmployees: string;
  readonly apiPhotos: string;
  readonly apiPosition: string;
  readonly apiToolLanguage: string;

  constructor() {
    this.apiEndpoint = import.meta.env.API_ENDPOINT;
    this.apiEmployees = import.meta.env.API_EMPLOYEES;
    this.apiPhotos = import.meta.env.API_PHOTOS;
    this.apiPosition = import.meta.env.API_POSITION;
    this.apiToolLanguage = import.meta.env.API_TOOL_LANGUAGE;
  }
}

export const apiService = new ApiService();
