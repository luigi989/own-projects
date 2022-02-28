function LoadingIcon() {
    return (
      <div className='w-full h-screen flex-1 flex flex-col justify-center items-center bg-slate-300 dark:bg-[#031321]'>
          <div className='flex justify-center items-center md:scale-100'>
              <div className="w-1/2 flex flex-wrap animate-spinSlow">
                  <span className="w-[32px] h-[32px] bg-orange-400 m-1 
                                   animate-scale
                                   rounded-t-full rounded-l-full origin-bottom-right"></span>
                  <span className="w-[32px] h-[32px] bg-blue-400 m-1 
                                   animate-scale animation-delay-500
                                   rounded-t-full rounded-r-full origin-bottom-left"></span>
                  <span className="w-[32px] h-[32px] bg-pink-400 m-1 
                                   animate-scale animation-delay-1500
                                   rounded-b-full rounded-l-full origin-top-right"></span>
                  <span className="w-[32px] h-[32px] bg-yellow-400 m-1 
                                   animate-scale animation-delay-1000
                                   rounded-b-full rounded-r-full origin-top-left"></span>
              </div>
          </div>
      </div>
    );
  }
  
  export default LoadingIcon;
  