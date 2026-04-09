import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export interface User {
  id: string;
  email: string;
}

export interface Subscription {
  status: "active" | "expired" | "none";
  endsAt?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  role: string | null;
  subscription: Subscription | null;
}

interface SetCredentialsPayload {
  token?: string | null;
  role?: string | null;
  user?: User | null;
  subscription?: Subscription | null;
}

const initialState: AuthState = {
  user: null,
  token: Cookies.get("token") ?? null,
  role: Cookies.get("role") ?? null,
  subscription: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<SetCredentialsPayload>
    ) => {
      const { token, role, user, subscription } = action.payload;

      if (token !== undefined) {
        state.token = token;
        token
          ? Cookies.set("token", token, {
              secure: process.env.NODE_ENV === "production",
              sameSite: "Lax",
            })
          : Cookies.remove("token");
      }

      if (role !== undefined) {
        state.role = role;
        role
          ? Cookies.set("role", role, {
              secure: process.env.NODE_ENV === "production",
              sameSite: "Lax",
            })
          : Cookies.remove("role");
      }

      if (user !== undefined) {
        state.user = user;
      }

      if (subscription !== undefined) {
        state.subscription = subscription;
      }
    },

    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.subscription = null;
      Cookies.remove("token");
      Cookies.remove("role");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// const initialState = {
//   user: null,
//   token: Cookies.get("token") ?? null,
//   role: Cookies.get("role") ?? null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       const { token, role, user } = action.payload || {};

//       if (token !== undefined) {
//         state.token = token;
//         token
//           ? Cookies.set("token", token, {
//               secure: process.env.NODE_ENV === "production",
//               sameSite: "Lax",
//             })
//           : Cookies.remove("token");
//       }

//       if (role !== undefined) {
//         state.role = role;
//         role
//           ? Cookies.set("role", role, {
//               secure: process.env.NODE_ENV === "production",
//               sameSite: "Lax",
//             })
//           : Cookies.remove("role");
//       }

//       if (user !== undefined) {
//         state.user = user;
//       }
//     },

//     logOut: (state) => {
//       state.user = null;
//       state.token = null;
//       state.role = null;
//       Cookies.remove("token");
//       Cookies.remove("role");
//     },
//   },
// });

// export const { setCredentials, logOut } = authSlice.actions;
// export default authSlice.reducer;
