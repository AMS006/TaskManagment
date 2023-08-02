import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRequest: (state) => {
      state.loading = true;
      state.error = "";
    },
    userSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    },
    userFail: (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.error = action.payload;
    },
    userLogout: (state) => {
      state.loading = false;
      state.user = undefined;
      state.error = "";
    },
  },
});

export const { userRequest, userSuccess, userFail, userLogout } =
  userSlice.actions;

export default userSlice.reducer;
