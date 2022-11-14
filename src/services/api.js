// Modules
import axios from "axios";

// Base URL
const base = axios.create({
  baseURL: "https://help-search-api-prod.herokuapp.com/",
});

// API
export const getResults = async (query) => {
  if (!query) return [];

  const response = await base.get(`/search?query=${query}`);
  return response.data;
};
