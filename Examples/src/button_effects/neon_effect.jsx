// import './neon_effect.css';

function App() {
  return (
    <div className='flex-1 flex flex-col justify-center items-center bg-[#031321]'>
        <div className='flex scale-75 md:scale-100'>
            {/* Blue */}
            <div className="relative m-3 border-solid border-2 border-[#255784]
                            text-[#255784] box-border p-6">
                <h1 className="absolute top-[-12%] left-3 px-2 bg-[#031321] 
                               uppercase text-base">Blue</h1>
                <div className="relative group px-4 py-4 uppercase text-xl tracking-wider">
                    <span className="absolute h-[2px] top-0 left-0 w-0 
                                    group-hover:w-full group-hover:duration-500
                                    bg-gradient-to-r from-transparent to-[#255784]"></span>
                    <span className="absolute h-[2px] bottom-0 right-0 w-0 group-hover:w-full 
                                    group-hover:duration-500   
                                    bg-gradient-to-l from-transparent to-[#255784]"></span>
                    Neon Button
                </div>
            </div>
            {/* Green */}
            <div className="relative m-3 border-solid border-2 border-[#055205]
                            text-[#0c8612] box-border p-6">
                <h1 className="absolute top-[-12%] left-3 px-2 bg-[#031321] 
                               uppercase text-base">Green</h1>
                <div className="relative group px-4 py-4 uppercase text-xl tracking-wider">
                    <span className="absolute h-[2px] top-0 left-0 w-0 
                                    group-hover:w-full group-hover:duration-500
                                    bg-gradient-to-r from-transparent to-[#0c8612]"></span>
                    <span className="absolute h-[2px] bottom-0 right-0 w-0 group-hover:w-full 
                                    group-hover:duration-500   
                                    bg-gradient-to-l from-transparent to-[#0c8612]"></span>
                    Neon Button
                </div>
            </div>
            {/* Red */}
            <div className="relative m-3 border-solid border-2 border-[#8a1616]
                            text-[#c51313] box-border p-6">
                <h1 className="absolute top-[-12%] left-3 px-2 bg-[#031321] 
                               uppercase text-base">Red</h1>
                <div className="relative group px-4 py-4 uppercase text-xl tracking-wider">
                    <span className="absolute h-[2px] top-0 left-0 w-0 
                                    group-hover:w-full group-hover:duration-500
                                    bg-gradient-to-r from-transparent to-[#c51313]"></span>
                    <span className="absolute h-[2px] bottom-0 right-0 w-0 group-hover:w-full 
                                    group-hover:duration-500   
                                    bg-gradient-to-l from-transparent to-[#c51313]"></span>
                    Neon Button
                </div>
            </div>
            {/* Black */}
            <div className="relative m-3 border-solid border-2 border-black
                            text-[#585353] box-border p-6">
                <h1 className="absolute top-[-12%] left-3 px-2 bg-[#031321] 
                               uppercase text-base">Black</h1>
                <div className="relative group px-4 py-4 uppercase text-xl tracking-wider">
                    <span className="absolute h-[2px] top-0 left-0 w-0 
                                    group-hover:w-full group-hover:duration-500
                                    bg-gradient-to-r from-transparent to-black"></span>
                    <span className="absolute h-[2px] bottom-0 right-0 w-0 group-hover:w-full 
                                    group-hover:duration-500   
                                    bg-gradient-to-l from-transparent to-black"></span>
                    Neon Button
                </div>
            </div>
            {/* Multicolor */}
            <div className="flex p-1 bg-gradient-to-r from-[#743ad5] to-red-700">
              <div className="relative bg-[#031321]
                              text-[#743ad5] p-5">
                  <h1 className="absolute top-[-14%] left-3 px-2 bg-[#031321] 
                                uppercase text-base">Multicolor</h1>
                  <div className="relative group px-4 py-4 uppercase text-[#585353] text-xl tracking-wider">
                      <span className="absolute h-[2px] top-0 left-0 w-0 
                                      group-hover:w-full group-hover:duration-500
                                      bg-gradient-to-r from-[#743ad5] to-red-700"></span>
                      <span className="absolute h-[2px] bottom-0 right-0 w-0 group-hover:w-full 
                                      group-hover:duration-500   
                                      bg-gradient-to-l from-[#743ad5] to-red-700"></span>
                      Neon Button
                  </div>
              </div>
            </div>
        </div>

        <nav className="flex sm:justify-center space-x-4">
          {[
            ['Home', '[#255784]'],
            ['Team', '[#055205]'],
            ['Projects', '[#c51313]'],
            ['Reports', '[#743ad5]'],
          ].map(([title, color]) => (
            <div className={`rounded-lg px-3 py-2 text-white
                                     font-medium hover:bg-slate-100 hover:text-slate-900
                                     bg-${color}`}>{title}</div>
          ))}
        </nav>
    </div>
  );
}

export default App;
