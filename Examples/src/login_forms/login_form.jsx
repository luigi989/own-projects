import { React, useState } from 'react';
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

                <form className="flex flex-col p-10">
                    <h1 className='text-light dark:text-dark text-center uppercase text-3xl'>Login</h1>
                    <input className='focus:border-blue-500 focus:rounded-none
                                  bg-[#191919] duration-300 ease-in text-white
                                    border-2 border-solid border-blue-800 rounded-3xl 
                                    px-2 py-2 my-4 text-center outline-none'
                        type="text"
                        name=""
                        placeholder="Username"
                    />
                    <input className='focus:border-blue-500 focus:rounded-none
                                  bg-[#191919] duration-300 ease-in text-white
                                    border-2 border-solid border-blue-800 rounded-3xl 
                                    px-2 py-2 mb-4 text-center outline-none'
                        type="password"
                        name=""
                        placeholder="Password"
                    />
                    <input className='hover:bg-green-400 hover:text-black w-2/3 self-center
                                    border-2 border-solid border-green-400 rounded-3xl 
                                    px-6 py-2 text-light dark:text-dark text-center outline-none duration-300'
                        type="submit"
                        name=""
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
}