//# Json-Server API_URL (MOCK DATA)
export const LOCALHOST_PORT =
  process.env.REACT_APP_API_URL || 'http://localhost:3001';

if (!process.env.REACT_APP_API_URL) {
  console.warn('Using default API URL:', LOCALHOST_PORT);
}
