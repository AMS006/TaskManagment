import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTasks: [],
  currentTask: undefined,
  loading: false,
  error: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    taskRequest: (state) => {
      state.loading = true;
      state.error = "";
    },
    allTaskSuccess: (state, action) => {
      state.loading = false;
      state.allTasks = action.payload;
      state.error = "";
    },
    taskFail: (state, action) => {
      state.loading = false;
      state.allTasks = [];
      state.currentTask = undefined;
      state.error = action.payload;
    },
    setCurrentTask: (state, action) => {
      state.currentTask = action.payload;
    },
  },
});

export const { taskRequest, allTaskSuccess, taskFail, setCurrentTask } =
  taskSlice.actions;

export default taskSlice.reducer;
