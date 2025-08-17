import axios from "axios";
import { API_BASE } from "../utils/constants";

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

export default apiClient;