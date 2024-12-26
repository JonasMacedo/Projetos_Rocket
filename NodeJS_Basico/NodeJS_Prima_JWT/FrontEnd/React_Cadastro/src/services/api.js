import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localhost:3035',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default api