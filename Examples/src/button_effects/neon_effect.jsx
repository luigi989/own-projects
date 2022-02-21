// import './neon_effect.css';

function App() {
  return (
    <div className='flex-1 flex flex-col justify-center items-center bg-[#031321]'>
        <div className='flex flex-col scale-75 md:scale-100'>
            {/* Map through Blue, Green, Red and Black */}
            <div className="flex flex-col">
              {[
                ['Blue', 'border-[#255784]', 'text-[#255784]', 'to-[#255784]'],
                ['Green', 'border-[#055205]', 'text-[#0c8612]', 'to-[#0c8612]'],
                ['Red', 'border-[#8a1616]', 'text-[#c51313]', 'to-[#c51313]'],
                ['Black', 'border-black', 'text-[#585353]', 'to-black']
              ].map(([title, borderColor, textColor, gradientColor]) => (
                <div className={`flex relative m-3 border-solid border-2 ${borderColor}
                                ${textColor} box-border p-6`}>
                    <h1 className="absolute top-[-12%] left-3 px-2 bg-[#031321] 
                                  uppercase text-base">{title}</h1>

                    <div className={`relative px-4 py-4 uppercase ${textColor} text-xl tracking-wider
                                  hover:bg-black hover:outline hover:outline-2 hover:${borderColor}`}>
                            Neon Button
                    </div>
                    
                    <div className="relative group px-4 py-4 uppercase text-xl tracking-wider">
                        <span className={`absolute h-[2px] top-0 left-0 w-0 
                                        group-hover:w-full group-hover:duration-500
                                        bg-gradient-to-r from-transparent ${gradientColor}`}></span>
                        <span className={`absolute h-[2px] bottom-0 right-0 w-0 group-hover:w-full 
                                        group-hover:duration-500   
                                        bg-gradient-to-l from-transparent ${gradientColor}`}></span>
                        Neon Button
                    </div>

                    <div className="relative group px-4 py-4 uppercase text-xl tracking-wider">
                        <span className={`absolute h-[2px] top-0 left-0 w-0 
                                        group-hover:animate-moveWidth group-hover:duration-500
                                        bg-gradient-to-r from-transparent ${gradientColor}`}></span>
                        <span className={`absolute h-[2px] bottom-0 right-0 w-0 
                                        group-hover:animate-moveWidth group-hover:duration-500   
                                        bg-gradient-to-l from-transparent ${gradientColor}`}></span>
                        Neon Button
                    </div>

                    <div className="relative group px-4 py-4 uppercase text-xl tracking-wider">
                        <span className={`absolute h-[2px] top-0 left-0 w-0 
                                        group-hover:animate-moveWidth group-hover:duration-500
                                        bg-gradient-to-r from-transparent ${gradientColor}`}></span>
                        <span className={`absolute w-[2px] right-0 top-0 h-0 
                                        group-hover:animate-moveHeight 
                                        group-hover:animation-delay-500 group-hover:duration-500   
                                        bg-gradient-to-b from-transparent ${gradientColor}`}></span>
                        <span className={`absolute h-[2px] bottom-0 right-0 w-0 
                                        group-hover:animate-moveWidth 
                                        group-hover:animation-delay-1000 group-hover:duration-500   
                                        bg-gradient-to-l from-transparent ${gradientColor}`}></span>
                        <span className={`absolute w-[2px] left-0 bottom-0 h-0 
                                        group-hover:animate-moveHeight 
                                        group-hover:animation-delay-1500 group-hover:duration-500   
                                        bg-gradient-to-t from-transparent ${gradientColor}`}></span>
                        Neon Button
                    </div>
                </div>
              ))}
            </div>
            
            {/* Multicolor */}
            <div className="flex items-center relative m-3 p-px bg-gradient-to-r from-[#743ad5] to-red-700">
              <h1 className="absolute top-[-10%] left-3 px-2 bg-[#031321] 
                             text-[#743ad5] uppercase text-base">Multicolor</h1>

              <div className="flex p-5 bg-[#031321] text-[#584353] uppercase text-xl tracking-wider">
                <div className="group relative p-px hover:bg-gradient-to-l from-[#743ad5] to-red-700">
                    <div className="px-4 py-4 group-hover:bg-black">
                        Neon Button
                    </div>
                </div>

                <div className="group relative px-4 py-4">
                  <span className="absolute h-[2px] top-0 left-0 w-0 
                                  group-hover:w-full group-hover:duration-500
                                  bg-gradient-to-r from-[#743ad5] to-red-700"></span>
                  <span className="absolute h-[2px] bottom-0 right-0 w-0 group-hover:w-full 
                                  group-hover:duration-500   
                                  bg-gradient-to-l from-[#743ad5] to-red-700"></span>
                  Neon Button
                </div>

                <div className="group relative px-4 py-4">
                  <span className="absolute h-[2px] top-0 left-0 w-0 
                                  group-hover:animate-moveWidth group-hover:duration-500
                                  bg-gradient-to-r from-[#743ad5] to-red-700"></span>
                  <span className="absolute h-[2px] bottom-0 right-0 w-0 
                                  group-hover:animate-moveWidth group-hover:duration-500   
                                  bg-gradient-to-l from-[#743ad5] to-red-700"></span>
                  Neon Button
                </div>

                <div className="group relative px-4 py-4">
                  <span className="absolute h-[2px] top-0 left-0 w-0 
                                  group-hover:animate-moveWidth group-hover:duration-500
                                  bg-gradient-to-r from-[#743ad5] to-red-700"></span>
                  <span className="absolute w-[2px] right-0 top-0 h-0 
                                  group-hover:animate-moveHeight 
                                  group-hover:animation-delay-500 group-hover:duration-500   
                                  bg-gradient-to-b from-[#743ad5] to-red-700"></span>
                  <span className="absolute h-[2px] bottom-0 right-0 w-0 
                                  group-hover:animate-moveWidth 
                                  group-hover:animation-delay-1000 group-hover:duration-500   
                                  bg-gradient-to-l from-[#743ad5] to-red-700"></span>
                  <span className="absolute w-[2px] left-0 bottom-0 h-0 
                                  group-hover:animate-moveHeight 
                                  group-hover:animation-delay-1500 group-hover:duration-500   
                                  bg-gradient-to-t from-[#743ad5] to-red-700"></span>
                  Neon Button
                </div>

              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
