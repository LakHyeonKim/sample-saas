import { createMainClient } from "@/lib/remote/main/client";
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
  ForgotPasswordPayload,
  ForgotPasswordResponse,
} from "./schema";

export const login = async (payload: LoginPayload) => {
  return createMainClient().post<LoginResponse>("/auth/login", payload);
};

export const register = async (payload: RegisterPayload) => {
  return createMainClient().post<RegisterResponse>("/auth/register", payload);
};

export const forgotPassword = async (payload: ForgotPasswordPayload) => {
  return createMainClient().post<ForgotPasswordResponse>("/auth/forgot-password", payload);
};
