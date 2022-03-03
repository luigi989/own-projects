import { React, useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import ModeSwitch from "../modeSwitch";

export default function Login_form() {
    const [isDark, setIsDark] = useState(true);

    return (
        <div className={isDark ? 'w-full h-full dark' :
            'w-full h-full '}>
            <div className='h-full flex-1 flex justify-center items-center bg-light dark:bg-dark'>

                <div className='absolute top-10 right-10'>
                    <ModeSwitch setIsDark={setIsDark} />
                </div>

                <form className="flex flex-col p-5 bg-slate-300 rounded-2xl shadow-xl">
                    <h1 className='text-light dark:text-light text-center uppercase text-3xl'>Login</h1>
                    <div className='my-4 flex gap-5 items-center focus-within:bg-deepblue focus-within:text-dark
                                    border-2 border-solid border-deepblue rounded-3xl'>
                        <FaUser className='ml-3'/>
                        <input className='py-2 pl-2 bg-transparent rounded-r-3xl duration-300 outline-none
                                        focus:text-dark placeholder:text-deepblue' 
                                type='text' placeholder='User' required />
                    </div>
                    <div className='my-2 flex gap-5 items-center focus-within:bg-deepblue focus-within:text-dark
                                    border-2 border-solid border-deepblue rounded-3xl'>
                        <FaLock className='ml-3'/>
                        <input className='py-2 pl-2 bg-transparent rounded-r-3xl duration-300 outline-none
                                        focus:text-dark placeholder:text-deepblue' 
                                type='password' placeholder='Password' required />
                    </div>
                    <input className='focus:bg-green-700 dark:focus:text-black
                                    hover:bg-green-700 dark:hover:text-black w-2/3 self-center
                                    border-2 border-solid border-green-700 rounded-3xl 
                                    my-5 px-6 py-2 text-black dark:text-black text-center outline-none duration-300'
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
}