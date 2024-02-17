import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player_name: localStorage.getItem("player_name") || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.player_name = action.payload;
      localStorage.setItem("player_name", action.payload);
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
