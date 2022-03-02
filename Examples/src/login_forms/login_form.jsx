import { React, useState } from 'react';
import ModeSwitch from "../modeSwitch";

export default function Login_form() {
    const [isDark, setIsDark] = useState(true);
    const textBoxLook = 'focus:border-deepblue focus:bg-deepblue focus:placeholder-white ' +
                        'bg-transparent duration-300 ease-in text-white ' +
                        'border-2 border-solid border-deepblue rounded-3xl ' + 
                        'px-2 py-2 my-4 text-center outline-none placeholder-black';
    return (
        <div className={isDark ? 'w-full h-full dark' :
            'w-full h-full '}>
            <div className='h-full flex-1 flex justify-center items-center bg-light dark:bg-dark'>

                <div className='absolute top-10 right-10'>
                    <ModeSwitch setIsDark={setIsDark} />
                </div>

                <form className="flex flex-col p-10 bg-slate-300 rounded-2xl shadow-xl">
                    <h1 className='text-light dark:text-light text-center uppercase text-3xl'>Login</h1>
                    <input className={textBoxLook}
                        type="text"
                        placeholder="Username"
                    />
                    <input className={textBoxLook}
                        type="password"
                        placeholder="Password"
                    />
                    <input className='focus:bg-green-700 dark:focus:text-black
                                    hover:bg-green-700 dark:hover:text-black w-2/3 self-center
                                    border-2 border-solid border-green-700 rounded-3xl 
                                    px-6 py-2 text-black dark:text-black text-center outline-none duration-300'
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
}