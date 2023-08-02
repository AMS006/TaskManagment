import React from 'react'

const Navbar = () => {
    const handleLogout = () => {
        
    }
    return (
        <div className='flex justify-between items-center lg:px-8 px-4 py-3 shadow flex-shrink-0'>
            <h1 className='md:text-2xl font-semibold '>Task Managment</h1>
            <button title='Lougout' className='border border-slate-800 px-2.5 py-1 font-semibold'>Logout</button>
        </div>
    )
}

export default Navbar