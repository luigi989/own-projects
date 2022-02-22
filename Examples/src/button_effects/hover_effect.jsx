import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function HoverEffect() {
    return (
      <div className='flex-1 flex flex-col justify-center items-center bg-slate-300 dark:bg-[#031321]'>
          <div className='flex flex-col scale-75 md:scale-100 bg-slate-300 rounded-2xl p-3'>
              <div className="flex flex-col m-6">
                {[
                  ['[#255784]'],['[#ca1f1f]'],['[#92530b]']
                ].map(([color]) => (
                    <div className={`relative flex gap-20 m-4 text-5xl text-${color}`}>
                        <div className='group relative cursor-pointer'>
                            {[['top-0', 'border-t-4', 'w-full', '-skew-y'], 
                              ['right-0', 'border-r-4', 'h-full', 'skew-x'],
                              ['bottom-0', 'border-b-4', 'w-full', '-skew-y'], 
                              ['left-0', 'border-l-4', 'h-full', 'skew-x']
                            ].map(([position, border, size, skew]) => (
                                <span className={`absolute ${position} border-${color} duration-300 
                                                group-hover:border-solid group-hover:${size} 
                                                group-hover:${border} group-hover:${skew}-12 `}>
                                </span>
                            ))}
                            <FaFacebookF className='group-hover:scale-75 m-3 duration-300'/>
                        </div>

                        <div className='group relative cursor-pointer'>
                            {[['top-0', 'border-t-4', 'w-full', 'skew-y'], 
                              ['right-0', 'border-r-4', 'h-full', 'skew-x'],
                              ['bottom-0', 'border-b-4', 'w-full', 'skew-y'], 
                              ['left-0', 'border-l-4', 'h-full', 'skew-x']
                            ].map(([position, border, size, skew]) => (
                                <span className={`absolute ${position} border-${color} duration-300 
                                                group-hover:border-solid group-hover:${size} 
                                                group-hover:border-4`}>
                                </span>
                            ))}
                            <FaTwitter className='group-hover:scale-75 m-3 duration-300'/>
                        </div>
                        <FaInstagram />
                        <FaYoutube />
                        <FaGithub />
                        <FaLinkedin />
                    </div>
                ))}
              </div>
          </div>
      </div>
    );
  }
  
  export default HoverEffect;
  