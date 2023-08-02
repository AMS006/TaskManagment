import React from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'

const AlertModal = ({ isOpen, onClose }) => {
    const task = useSelector((state) => state.task.currentTask)
    const handleDelete = () => {

    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h3 className='font-semibold text-xl pb-2.5'>Delete Task</h3>
            <p>Are you Sure you want to delete <b>{task.title}</b></p>

            <div className='flex justify-end gap-2 pt-2'>
                <button onClick={onClose} className='px-2 py-1 border border-slate-800 rounded'>Cancel</button>
                <button onClick={handleDelete} className='px-2 py-1 bg-red-600 text-white rounded'>Delete</button>
            </div>
        </Modal>
    )
}

export default AlertModal