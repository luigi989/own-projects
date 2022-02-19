// import './neon_effect.css';

function App() {
  return (
    <div className='flex-1 flex justify-center items-center bg-[#031321]'>
        <div className='flex-col scale-75 md:scale-100'>
            <div className="m-3 border-solid border-2 border-[#255784]
                            text-[#255784]">
                <h1 className="absolute top-0 left-7 px-2 bg-[#031321] 
                               uppercase text-base">Blue</h1>
                <button className="inline-block mx-10 my-6 uppercase text-xl tracking-wider
                                   transition duration-200">
                    <span className="absolute block h-[2px] top-0 w-full l-[-100%] hover:l-full
                                     bg-gradient-to-r from-transparent to-[#255784]
                                    transition duration-1000"></span>
                    <span className="absolute block "></span>
                    <span className="absolute block "></span>
                    <span className="absolute block "></span>
                    Neon Button
                </button>
                <button className="inline-block mx-10 my-4 uppercase text-xl tracking-wider">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Neon Button
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
