import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:443', // Mude a URL caso esteja rodando em outra porta
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;