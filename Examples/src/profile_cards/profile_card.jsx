import { React, useState } from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ModeSwitch from '../assets/modeSwitch';
import { ContactButton, InfoCell } from './assets';
import profileImage from './pics/profile_pic.png';


function App() {
    const [isDark, setIsDark] = useState(true);

    const facebook = 'https://www.facebook.com/ludvig.lindahl.1/';
    const twitter = 'https://twitter.com/Ludde989';
    const github = 'https://github.com/luigi989';
    const linkedin = 'https://www.linkedin.com/in/ludvig-lindahl/';
    const mediaButton = 'transition ease-linear duration-300 hover:text-dark_accent cursor-pointer';

    return (
        <div className={isDark ? 'w-full h-full dark' :
            'w-full h-full '}>
            <div className='relative h-full flex-1 flex justify-center items-center bg-light_secondary dark:bg-dark'>

                <div className='absolute top-10 right-10'>
                    <ModeSwitch setIsDark={setIsDark} />
                </div>

                <div className='flex-col scale-75 md:scale-100 basis-1'>
                    <div className='flex-col flex justify-center items-center bg-dark_secondary p-8 rounded-t-2xl shadow-xl'>
                        <div className='rounded-full p-2 animate-move
                                    bg-gradient-to-r from-cyan-500 to-blue-500'>
                            <img className='block w-40 h-40 rounded-full bg-center' src={profileImage} alt="" />
                        </div>

                        <div className="text-dark text-xl font-semibold mt-3">Ludvig Lindahl</div>
                        <div className="text-dark_accent text-lg">Developer &#38; Designer</div>
                        <div className="flex gap-5 m-2 text-dark text-2xl">
                            <FaFacebookF className={mediaButton} onClick={() => window.open(facebook, '_blank')} />
                            <FaTwitter className={mediaButton} onClick={() => window.open(twitter, '_blank')} />
                            <FaGithub className={mediaButton} onClick={() => window.open(github, '_blank')} />
                            <FaLinkedin className={mediaButton} onClick={() => window.open(linkedin, '_blank')} />
                        </div>
                            <ContactButton text='Contact me' to='mailto:ludde.lindahl@gmail.com' />

                    </div>
                    <div className="flex flex-row justify-center items-center
                            bg-light_secondary p-8 divide-x-2 rounded-b-2xl shadow-xl">
                        <InfoCell text='Posts' number='120' />
                        <InfoCell text='Following' number='127' />
                        <InfoCell text='Followers' number='120k' />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
