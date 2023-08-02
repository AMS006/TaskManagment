import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'

const EditTaskModal = ({ isOpen, onClose }) => {
    const handleClose = (e) => {
        e.preventDefault()
        onClose()
    }
    const task = useSelector((data) => data.task.currentTask)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")

    useEffect(() => {
        if (task) {
            setTitle(task.title)
            setDescription(task.description)
            setStatus(task.status)
        }
    }, [task])

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className='font-semibold text-xl pb-2.5'>Update Task</h2>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label htmlFor="title" className='text-sm font-semibold'>Title of Task</label>
                    <input 
                        type="test" 
                        placeholder='Enter Title' 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className='py-1 px-2 focus:outline-none border border-slate-800 rounded' 
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="description" className='text-sm font-semibold'>Description of Task</label>
                    <input 
                        type="text" 
                        name="description" i
                        d="description" 
                        placeholder='Enter Description' 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className='py-1 px-2 focus:outline-none border border-slate-800 rounded' 
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="status" className='text-sm font-semibold'>Update Status</label>
                    <select id="status" className='py-1 px-2 focus:outline-none border border-slate-800' defaultValue={status.toLowerCase()} onChange={(e) => setStatus(e.target.value)}>
                        <option value="">Select Status</option>
                        {status !== "Processing" && <option value="processing">Under Process</option>}
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className='flex justify-end gap-2 items-center pt-2'>
                    <button className='px-2 py-1 border border-slate-800 rounded cursor-pointer' onClick={handleClose}>Cancel</button>
                    <input 
                        type="submit" 
                        value="Update" 
                        className='px-2.5 py-1 bg-slate-800 rounded cursor-pointer text-white' 
                    />
                </div>
            </form>
        </Modal>
    )
}

export default EditTaskModal