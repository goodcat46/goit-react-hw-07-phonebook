import axios from 'axios';
import { BASE_URL } from './BASE_URL';

const fetchContactsApi = axios.create({ baseURL: BASE_URL });

export default fetchContactsApi