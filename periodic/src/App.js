import React from 'react';
import { Row1, Row2, Row3, Row4, Row5, Row6, Row6exp, Row7, Row7exp } from './rows';


function App() {
  return (
    <div className='background'>
      <header className="w-full flex items-center justify-center py-2 bg-slate-800">
        <span className='text-3xl text-slate-400'>Periodiska systemet</span>
      </header>
      <div className=" flex flex-col mx-auto w-fit">
        {[['1', <Row1 />], 
          ['2', <Row2 />], 
          ['3', <Row3 />], 
          ['4', <Row4 />],
          ['5', <Row5 />], 
          ['6', <Row6 />], 
          ['7', <Row7 />], 
          ['8', <Row6exp />], 
          ['9', <Row7exp />]]
          .map(([number, row]) => (
            <div className='flex' key={number}>
              <span className='peer wh-10 flex items-center justify-center px-3 
                                        text-white text-xl'
                    id='row1num'>{number}</span>
              <div className='peer-hover:bg-red-500 '>{row}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default App;
