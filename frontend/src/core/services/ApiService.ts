class ApiService {
  readonly apiEndpoint: string;
  readonly apiEmployees: string;
  readonly apiPhotos: string;

  constructor() {
    this.apiEndpoint = import.meta.env.API_ENDPOINT;
    this.apiEmployees = import.meta.env.API_EMPLOYEES;
    this.apiPhotos = import.meta.env.API_PHOTOS;
  }
}

export const apiService = new ApiService();
