import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { GrSecure } from 'react-icons/gr'

const SignIn = ({ setTab }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSigning, setIsSigning] = useState(false)
    const handleSubmit = () => {

    }
    return (
        <div className='flex flex-col gap-10 sm:justify-center items-center sm:py-0 py-8'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='text-center w-full text-slate-900 md:text-3xl text-xl font-semibold'>SignIn</h1>
                <p className='text-center w-full text-slate-800 text-sm font-semibold'>SigIn To you account to manage your tasks</p>
            </div>
            <div className='lg:w-1/3 md:w-2/5 sm:w-2/3 w-full sm:px-0 px-3'>
                <form action="" className='flex flex-col gap-8' onSubmit={handleSubmit}>
                    <div className='flex items-center border bg-white w-full'>
                        <span className='px-2 h-full'><MdEmail /></span>
                        <input type="email" value={email} name="email" placeholder='Enter Your Email' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex items-center border bg-white w-full'>
                        <span className='px-2 h-full'><GrSecure /></span>
                        <input type="password" value={password} name="password" placeholder='Enter Your password' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={`bg-slate-800 text-white py-2 shadow rounded-full ${isSigning ? 'opacity-70 cursor-not-allowed' : ''}`}>
                        <input type="submit" value={`${isSigning ? 'Signing...' : 'Sign Up'}`} className={`h-full w-full cursor-pointer ${isSigning ? 'opacity-70 cursor-not-allowed' : ''}`} />
                    </div>
                    <div className='text-slate-900 font-semibold text-center'>
                        <button className='cursor-pointer hover:underline' onClick={() => setTab("signup")}>Don't Have Account? Sign Up with us</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn