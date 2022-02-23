import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import profileImage from './pics/profile_pic.png';

function App() {
  return (
    <div className='flex-1 flex justify-center items-center'>
        <div className='flex-col scale-75 md:scale-100'>
            <div class='flex-row flex justify-center items-center bg-[#2c3a47] p-6 md:p-12 rounded-t-2xl'>
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
                          bg-[#f4f4f4] p-8 divide-x-2 rounded-b-2xl">
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
  );
}

export default App;
