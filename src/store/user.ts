import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserInfo = {
  email: string;
  id: string;
  nickname: string;
  createdAt: string;
  profile? : string;
};

const initialUserInfo: UserInfo = {
  email: "",
  id: "",
  nickname: "",
  createdAt: "",
  profile : ''
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserInfo,
  reducers: {
    savedUserInfo(state, action: PayloadAction<UserInfo>) {
      state.createdAt = action.payload.createdAt;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
    },
    changeNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
    changeProfile(state, action: PayloadAction<string>) {
      state.profile = action.payload
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice;
