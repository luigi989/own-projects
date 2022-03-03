import { React, useState } from 'react';
import ModeSwitch from '../modeSwitch';

function HoverEffect() {
    const [isDark, setIsDark] = useState(true);

    return (
        <div className={isDark ? 'w-full h-full dark' :
            'w-full h-full '}>
            <div className='w-screen h-screen flex-1 flex justify-center items-center bg-light dark:bg-dark'>

                <div className='absolute top-10 right-10'>
                    <ModeSwitch setIsDark={setIsDark} />
                </div>

                <div className='flex scale-50 md:scale-100 bg-slate-300 rounded-2xl p-3'>
                    {/* Maps an array into three rows with a different color on each row */}
                    <div className="flex flex-row md:flex-col m-6">
                        {[
                            ['border-[#255784]', 'text-[#255784]'],
                            ['border-[#ca1f1f]', 'text-[#ca1f1f]'],
                            ['border-[#92530b]', 'text-[#92530b]']
                        ].map(([borderColor, textColor]) => (
                            <div key={textColor} className={`flex flex-col md:flex-row gap-20 m-4 text-5xl ${textColor}`}>
                                <h2 className={`group relative text-deepblue uppercase cursor-pointer`}>
                                    <span className={`absolute top-0 left-0 w-0 h-100 ${textColor} overflow-hidden group-hover:w-full duration-1000
                                                    border-r-4 border-solid ${borderColor}`}>
                                        Creative...
                                    </span>
                                    Creative...
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HoverEffect;
