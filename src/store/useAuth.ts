/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { api } from "../config/api";
import Cookies from "js-cookie";
import { IUser } from "../interfaces/IUser";
import { IAuthPayload } from "../interfaces/IAuthPayload";

type States = {
  user?: IUser;
};

export type recoveryCredentials = {
  user_email: string;
};

export type RegisterCredentials = {
  user_name: string;
  user_email: string;
  user_cpf: string;
  user_password: string;
  user_country: string;
  user_occupation: string;
};

type Actions = {
  getUser: () => Promise<void>;
  login: (credentials: FormData) => Promise<IAuthPayload>;
  logout: () => void;
  recovery: (credentials: recoveryCredentials) => Promise<string>;
  register: (credentials: RegisterCredentials) => Promise<IAuthPayload>;
};

export const useAuth = create<States & Actions>((set) => {
  return {
    user: undefined,
    login: async (credentials: FormData) => {
      try {
        const payload = (await api.post("/api/user/login", credentials)).data;

        Cookies.set("refreshToken", payload.USER_TOKEN);
        Cookies.set("user", payload.USER_ID);

        return payload;
      } catch (error: any) {
        throw error.response.data.ERROR;
      }
    },
    logout: () => {
      Cookies.remove("user");
      Cookies.remove("refreshToken");
      set(() => ({ user: undefined }));
    },
    register: async (credentials: RegisterCredentials) => {
      const token = "10ddc14a0c24267b41c1fa2a81727b514ec9f857";
      try {
        const formData = new FormData();
        formData.append("token", token);
        formData.append("user_name", credentials.user_name);
        formData.append("user_email", credentials.user_email);
        formData.append("user_cpf", credentials.user_cpf);
        formData.append("user_password", credentials.user_password);
        formData.append("user_occupation", credentials.user_occupation);
        formData.append("user_country", credentials.user_country);

        const payload = (await api.post("/api/user/signup", formData)).data;

        Cookies.set("refreshToken", payload.USER_TOKEN);
        Cookies.set("user", payload.USER_ID);

        return payload;
      } catch (error: any) {
        throw error.response.data.ERROR;
      }
    },
    recovery: async (credentials: recoveryCredentials) => {
      const token = "";
      const credentialsFormData = new FormData();
      credentialsFormData.append("token", String(token));
      credentialsFormData.append("user_email", credentials.user_email);
      try {
        const payload = (
          await api.post("/api/user/recovery", credentialsFormData)
        ).data.SUCCESS;

        Cookies.set("refreshToken", payload.USER_TOKEN);
        Cookies.set("user", payload.USER_ID);

        return payload;
      } catch (error: any) {
        throw error.response.data.ERROR;
      }
    },
    getUser: async () => {
      const refreshToken = Cookies.get("refreshToken");
      const userId = Cookies.get("user");
      const token = "";
      const credentials = new FormData();

      credentials.append("token", String(token));
      credentials.append("user_token", String(refreshToken));
      credentials.append("user_id", String(userId));

      try {
        const payload = (await api.post("/api/user/get-profile", credentials))
          .data.PROFILE;
        set(() => ({ user: payload }));
      } catch (error: any) {
        throw error.response.data.ERROR;
      }
    },
  };
});
