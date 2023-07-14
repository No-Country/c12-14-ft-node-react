import axios from 'axios'

const URL = import.meta.env.VITE_API_URL

export const devColabApi = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
