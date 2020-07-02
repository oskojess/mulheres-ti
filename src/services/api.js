import axios from 'axios';

const api = axios.create({ baseURL: 'https://api-women-ti.herokuapp.com/api' })

export default api;