import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  login() {},
  register() {},
  logout() {},
  getActiveUser() {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    activeUser: null,
    registrationErrors: null,
    loginError: false,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setActiveUser(state, action) {
      state.activeUser = action.payload;
    },
    setRegistrationErrors(state, action) {
      state.registrationErrors = action.payload;
    },
    setLoginError(state, action) {
      state.loginError = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  setToken,
  setActiveUser,
  logout,
  login,
  register,
  getActiveUser,
  setRegistrationErrors,
  setLoginError,
} = authSlice.actions;

export default authSlice.reducer;