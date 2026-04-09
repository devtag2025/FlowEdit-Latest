import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../features/auth/authSlice";
import type { RootState } from "../store";

interface RefreshResponse {
  access_token: string;
}

// 🔹 base query (ENV based URL)
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as { auth?: { token?: string | null } };
    const token = state?.auth?.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// 🔹 reauth wrapper
const baseQueryWithReauth: BaseQueryFn = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (
    result?.error &&
    typeof result.error === "object" &&
    "status" in result.error &&
    result.error.status === 403
  ) {
    const refreshResult = await baseQuery(
      "/auth/refresh",
      api,
      extraOptions
    );

if (
  refreshResult.data &&
  typeof refreshResult.data === "object" &&
  "access_token" in refreshResult.data
) {
  const data = refreshResult.data as RefreshResponse;
  const state = api.getState() as RootState;

  api.dispatch(
    setCredentials({
      token: data.access_token,
      role: state?.auth?.role,
      user: state?.auth?.user,
    })
    
  );
   console.log(state?.auth?.role);

  result = await baseQuery(args, api, extraOptions);
} else {
  api.dispatch(logOut());
}
  }

  return result;
};

// 🔹 API slice
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Auth", "Admin", "Payment"],
  endpoints: () => ({}),
});
