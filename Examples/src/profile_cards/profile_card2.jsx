import { React, useState } from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import ModeSwitch from '../modeSwitch';
import profileImage from './pics/profile_pic.png';

function App() {

  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? 'w-full h-full dark' : 
                             'w-full h-full '}>
        <div className='relative h-full flex-1 flex justify-center items-center bg-light_secondary dark:bg-dark'>

            <div className='absolute top-10 right-10'>
                <ModeSwitch setIsDark={setIsDark} />
            </div>

            <div className='flex-col scale-75 md:scale-100 '>
                <div class='flex-row flex justify-center items-center bg-[#2c3a47] p-6 md:p-12 rounded-t-2xl shadow-xl'>
                    <div className='rounded-full p-2
                                    bg-gradient-to-r from-cyan-500 to-blue-500'>
                        <img className='block w-40 h-40 rounded-full bg-center' src={profileImage} alt="" />
                    </div>

                    <div className='flex flex-col justify-center items-center ml-5'>
                        <div className="text-white text-center text-xl font-semibold mt-3">Ludvig Lindahl</div>
                        <div className="m-3 text-[#e66767] text-base md:text-lg">Developer &#38; Designer</div>
                        <div className="flex text-white text-2xl">
                            <FaFacebookF className='mr-3 transition ease-linear duration-300
                                                hover:text-[#e66767] cursor-pointer' />
                            <FaTwitter className='mx-3 transition ease-linear duration-300
                                                hover:text-[#e66767] cursor-pointer' />
                            <FaGithub className='mx-3 transition ease-linear duration-300
                                                hover:text-[#e66767] cursor-pointer'  />
                            <FaYoutube className='mx-3 transition ease-linear duration-300
                                                hover:text-[#e66767] cursor-pointer'  />
                        </div>
                        <button className="bg-transparent border-[#e66767] border-solid border-2 rounded-lg
                                        px-10 py-2 mt-5  w-fit text-[#e66767] hover:bg-[#e66767] hover:text-white
                                        transition ease-linear duration-300">
                                Contact Me
                        </button>
                    </div>

                </div>
                <div className="flex flex-row justify-center items-center
                            bg-light_secondary p-8 divide-x-2 rounded-b-2xl shadow-xl">
                    <div className="flex flex-col p-4">
                        <span className='text-[#2c3a47] text-3xl '>120</span>
                        <span className='uppercase text-[#e66767]'>Posts</span>
                    </div>
                    <div className="flex flex-col p-4">
                        <span className='text-[#2c3a47] text-3xl text-center'>127</span>
                        <span className='uppercase text-[#e66767]'>Following</span>
                    </div>
                    <div className="flex flex-col p-4">
                        <span className='text-[#2c3a47] text-3xl text-center'>120k</span>
                        <span className='uppercase text-[#e66767]'>Followers</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  );
}

export default App;
