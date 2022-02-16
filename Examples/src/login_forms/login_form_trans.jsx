// import './login_form_trans.css';
import React from 'react';
import backgr from './pics/Astronaut.png';

export default function Login_form_trans() {
    return(
        <div className="flex-1 flex justify-center items-center bg-black">
            <div className="flex flex-col p-10">
                <input class="radio" type="radio" id="login_btn"  name="group" checked />
                <input class="radio" type="radio" id="register_btn" name="group" />
                <div className='text-white mb-4'>
                    <label className='hover:border-b-2 hover:border-solid hover:border-red-900
                                      mr-4 text-4xl cursor-pointer' 
                           id="login_tab" 
                           for="login_btn">Login</label>
                    <label className='hover:border-b-2 hover:border-solid hover:border-[#a51717]
                                      text-4xl cursor-pointer' 
                           id="register_tab" 
                           for="register_btn">Register</label>
                </div>

                <div class="flex flex-col" id="login_content">
                    <input className='py-1 my-2 border-solid border-b-2 border-[#a51717]
                                      focus:border-dotted
                                      outline-none bg-transparent text-white'
                           type="text" 
                           name="" 
                           placeholder="Username" 
                    />
                    <input className='py-1 my-2 border-solid border-b-2 border-[#a51717]
                                      focus:border-dotted
                                      outline-none bg-transparent text-white'
                           type="password" 
                           name="" 
                           placeholder="Password" 
                    />
                    <a className='text-white text-xs' href='#'>Forgot your password?</a>
                    <input className='hover:bg-[#a51717] border-solid border-2 border-[#a51717]
                                      bg-none text-white p-1 cursor-pointer my-2'
                           type="submit" 
                           name="" 
                           value="Login" 
                    />
                </div>
                {/* <div class="panel" id="register_content">
                    <input type="text" name="" placeholder="Username" />
                    <input type="password" name="" placeholder="Password" />
                    <input type="password" name="" placeholder="Write password again" />
                    <input type="checkbox" id="accept" name="accept" />
                    <label for="accept">I hereby accept the conditions</label>
                    <input type="submit" name="" value="Create account" />
                </div> */}
            </div>
        </div>
    );
}