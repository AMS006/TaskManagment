import React from 'react'

const TaskHeader = ({ setAddModalOpen }) => {
    return (
        <div className='md:flex justify-between items-start'>
            <div className='flex gap-1.5 items-center'>
                <div className='flex flex-col items-center justify-center border rounded bg-[#e84b39] text-white md:p-4 p-2'>
                    <h3 className='md:text-3xl text-xl font-bold'>00</h3>
                    <h6 className='md:text-xl text-sm font-semibold text-center'>Task Created</h6>
                </div>
                <div className='flex flex-col items-center justify-center border rounded bg-[#f39d0a] text-white md:p-4 p-2'>
                    <h3 className='md:text-3xl text-xl font-bold'>00</h3>
                    <h6 className='md:text-xl text-sm font-semibold text-center'>Task Processing</h6>
                </div>
                <div className='flex flex-col items-center justify-center border rounded bg-[#2acd72] text-white md:p-4 p-2'>
                    <h3 className='md:text-3xl text-xl font-bold'>00</h3>
                    <h6 className='md:text-xl  text-sm font-semibold text-center'>Task Completed</h6>
                </div>
            </div>
            <div className='flex justify-end py-3'>
                <button onClick={() => setAddModalOpen(true)} className='bg-slate-800 text-white font-semibold px-2.5 py-2 rounded'>Add Task</button>
            </div>
        </div>
    )
}

export default TaskHeader