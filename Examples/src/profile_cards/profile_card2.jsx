import { React, useState } from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import ModeSwitch from '../modeSwitch';
import profileImage from './pics/profile_pic.png';

function App() {

  const [isDark, setIsDark] = useState(true);

  const mediaButton = 'transition ease-linear duration-300 hover:text-dark_accent cursor-pointer';

  return (
    <div className={isDark ? 'w-full h-full dark' : 
                             'w-full h-full '}>
        <div className='relative h-full flex-1 flex justify-center items-center bg-light_secondary dark:bg-dark'>

            <div className='absolute top-10 right-10'>
                <ModeSwitch setIsDark={setIsDark} />
            </div>

            <div className='flex-col scale-75 md:scale-100 '>
                <div className='flex-row flex justify-center items-center bg-dark_secondary  p-6 md:p-12 rounded-t-2xl shadow-xl'>
                    <div className='rounded-full p-2
                                    bg-gradient-to-r from-cyan-500 to-blue-500'>
                        <img className='block w-40 h-40 rounded-full bg-center' src={profileImage} alt="Profile image" />
                    </div>

                    <div className='flex flex-col justify-center items-center ml-5'>
                        <div className="text-dark text-center text-xl font-semibold mt-3">Ludvig Lindahl</div>
                        <div className="m-3 text-dark_accent text-base md:text-lg">Developer &#38; Designer</div>
                        <div className="flex gap-5 text-dark text-2xl">
                            <FaFacebookF className={mediaButton} />
                            <FaTwitter className={mediaButton} />
                            <FaGithub className={mediaButton}  />
                            <FaYoutube className={mediaButton}  />
                        </div>
                        <button className="bg-transparent border-[#e66767] border-solid border-2 rounded-lg
                                        px-10 py-2 mt-5  w-fit text-dark_accent hover:bg-[#e66767] hover:text-dark
                                        transition ease-linear duration-300">
                                Contact Me
                        </button>
                    </div>

                </div>
                <div className="flex flex-row justify-center items-center
                            bg-light_secondary p-8 divide-x-2 rounded-b-2xl shadow-xl">
                    {[['120', 'Posts'], ['127', 'Following'], ['120k', 'Followers']].map(([number, text]) =>(
                        <div key={text} className="flex flex-col items-center p-4">
                            <span className='text-[#2c3a47] text-3xl'>{number}</span>
                            <span className='uppercase text-dark_accent'>{text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
   
  );
}

export default App;
