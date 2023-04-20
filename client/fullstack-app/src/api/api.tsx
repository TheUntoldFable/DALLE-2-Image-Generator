import axios from 'axios'

const BASE_URL = 'http://localhost:8080'
const DEFAULT_HEADERS = { 'Content-Type': 'application/json' }

// eslint-disable-next-line import/prefer-default-export
export const API = axios.create({
  baseURL: BASE_URL,
  headers: DEFAULT_HEADERS,
})
