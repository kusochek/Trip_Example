import axios from 'axios';

export default axios.create({
  baseURL: 'https://64121077f9fe8122ae1bbe86.mockapi.io/api/v1',
  headers: { 'Content-Type': 'application/json' },
});
