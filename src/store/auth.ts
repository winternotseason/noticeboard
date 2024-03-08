import { createSlice } from "@reduxjs/toolkit";

export type Auth = {
  isAuthenticated : boolean;
  accessToken:string;
}

const initialAuthState:Auth = {
  isAuthenticated: false,
  accessToken : ''
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    savedAccessToken(state, action){
      state.accessToken = action.payload
    },
    deleteAccessToken(state){
      state.accessToken = ''
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice;
