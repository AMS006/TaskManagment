import axios from 'axios'
import { addTaskSuccess, allTaskSuccess, updateTaskSuccess } from '../reducers/taskReducer'

export const getAllTasks = (data) => async(dispatch) =>{
    try {
        dispatch(userRequest())

        const task = await axios({
            method:"GET",
            url:"http://localhost:4000/task",
        })
        
        dispatch(allTaskSuccess(task.data))

    } catch (error) {
        dispatch(taskFail(error.response.data.message))
    }
}

export const addTask = (data) => async(dispatch) =>{
    try {
        dispatch(userRequest())

        const task = await axios({
            method:"POST",
            url:"http://localhost:4000/task",
            data
        })
        
        dispatch(addTaskSuccess(task.data))

    } catch (error) {
        dispatch(taskFail(error.response.data.message))
    }
}

export const updateTask = (data) => async(dispatch) =>{
    try {
        dispatch(userRequest())

        const task = await axios({
            method:"PUT",
            url:"http://localhost:4000/task",
            data
        })
        
        dispatch(updateTaskSuccess(task.data))

    } catch (error) {
        dispatch(taskFail(error.response.data.message))
    }
}

export const deleteTask = (data) => async(dispatch) =>{
    try {
        dispatch(userRequest())

        const task = await axios({
            method:"DELETE",
            url:"http://localhost:4000/task",
            data
        })
        
        dispatch(userSuccess(task.data))

    } catch (error) {
        dispatch(taskFail(error.response.data.message))
    }
}