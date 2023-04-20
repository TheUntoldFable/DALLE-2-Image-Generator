import axios from 'axios'

const BASE_URL = 'https://image-generator-x2wa.onrender.com'
const DEFAULT_HEADERS = { 'Content-Type': 'application/json' }

// eslint-disable-next-line import/prefer-default-export
export const API = axios.create({
  baseURL: BASE_URL,
  headers: DEFAULT_HEADERS,
})
