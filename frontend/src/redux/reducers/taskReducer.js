import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  allTasks: [],
  currentTask: undefined,
  loading: false,
  error: "",
};
const handleUpdateTask = (state,task) =>{

}
const handleDeleteTask = (state,id) =>{

}
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    taskRequest: (state) => {
      state.loading = true
      state.error = ""
    },
    allTaskSuccess: (state, action) => {
      state.loading = false
      state.allTasks = action.payload.tasks
      state.error = ""
    },
    addTaskSuccess:(state,action) =>{
        state.loading = false
        state.allTasks.push(action.payload.task)
    },
    updateTaskSuccess:(state,action) =>{
        state.loading = false
        const updatedTasks = handleUpdateTask(current(state),action.payload.task)
        state.allTasks = updatedTasks
    },
    deleteTaskSuccess:(state,action) =>{
        state.loading = false
        const updatedTasks = handleDeleteTask(current(state),action.payload.id)
        state.allTasks = updatedTasks
    },
    taskFail: (state, action) => {
      state.loading = false
      state.allTasks = []
      state.currentTask = undefined
      state.error = action.payload
    },
    setCurrentTask: (state, action) => {
      state.currentTask = action.payload
    },
  },
});

export const { taskRequest, allTaskSuccess,addTaskSuccess,updateTaskSuccess,deleteTaskSuccess, taskFail, setCurrentTask } =
  taskSlice.actions;

export default taskSlice.reducer;
