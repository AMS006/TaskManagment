import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp';
import Layout from '../layout'

const AuthPage = () => {
    const [tab, setTab] = useState("signin");
    return (
        <div className='flex-grow flex flex-col h-full justify-center'>
            {tab === 'signin' && <SignIn setTab={setTab} />}
            {tab === 'signup' && <SignUp setTab={setTab} />}

        </div>
    )
}

export default Layout(AuthPage)