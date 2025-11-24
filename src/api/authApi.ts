import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH_API_BASE_URL } from "../config/env";

interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

interface AuthResponse {
  id: string;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  token: string;
  image?: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: AUTH_API_BASE_URL }),
  endpoints: builder => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: credentials => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation<AuthResponse, RegisterRequest>({
      // Using the add user endpoint as a simulation for registration
      query: userData => ({
        url: "/users/add",
        method: "POST",
        body: {
          ...userData,
          // Add a fake token since the API doesn't provide one
          token: `fake-token-${Date.now()}`,
        },
      }),
      transformResponse: (response: any) => ({
        id: response.id?.toString() || `${Date.now()}`,
        username: response.username,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        token: `fake-token-${Date.now()}`,
        image: response.image,
      }),
    }),

    getCurrentUser: builder.query<AuthResponse, string>({
      query: token => ({
        url: "/auth/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetCurrentUserQuery } =
  authApi;
