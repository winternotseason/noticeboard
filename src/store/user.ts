import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  email: string;
}

const initialUserEmail: userState = {
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserEmail,
  reducers: {
    savedEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    deletedEmail(state) {
      state.email = "";
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
