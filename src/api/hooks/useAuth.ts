import { useMutation, useQuery } from "@tanstack/react-query";
import { LoginRequest, LoginResponse, User } from "../../types/auth";
import authService from "../services/authService";

export function useLogin() {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: authService.login,
  });
}

export function useMe() {
  return useQuery<User>({
    queryKey: ["me"],
    queryFn: authService.me,
    staleTime: 5 * 60 * 1000,
  });
}