import axios, {AxiosRequestConfig} from 'axios';

export const baseURL = 'http://192.168.0.100:8000/api/v1';
// export const baseURL = 'https://exam-gpt-server.onrender.com/api/v1';

const config: AxiosRequestConfig = {baseURL, withCredentials: true};

export const axiosInstance = axios.create(config);
