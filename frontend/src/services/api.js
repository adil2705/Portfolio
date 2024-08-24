// services/api.js

require('dotenv').config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const contactEndpoints = {
  Contact_API: `${BASE_URL}/contact`,
};