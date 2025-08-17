import { LoginRequest, LoginResponse, User } from "../../types/auth";
import apiClient from "../client";

const authService = {
  login: async (payload: LoginRequest): Promise<LoginResponse> => {
    const { data } = await apiClient.post("/auth/login", payload);
    return data;
  },
  me: async (): Promise<User> => {
    const { data } = await apiClient.get("/auth/me");
    return data;
  },
};

export default authService;