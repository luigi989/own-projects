import React from 'react';
import { NumberCell } from './cells';
import { Row1, Row2, Row3, Row4, Row5, Row6, Row6exp, Row7, Row7exp } from './rows';


function App() {
  return (
    <div className='background'>
      <header className="w-full flex items-center justify-center py-2 bg-slate-800">
        <span className='text-3xl text-slate-400'>Periodiska systemet</span>
      </header>
      <div className="mt-2 mx-auto w-fit text-white">
        <NumberCell id='row1num' number='1' />
        <NumberCell id='row2num' number='2' />
        <NumberCell id='row3num' number='3' />
        <NumberCell id='row4num' number='4' />
        <NumberCell id='row5num' number='5' />
        <NumberCell id='row6num' number='6' />
        <NumberCell id='row7num' number='7' />
        <NumberCell id='row6num' number='6' />
        <NumberCell id='row7num' number='7' />
        
        <div />
            <div id='row1' className='inline-block'><Row1 /></div>
            <div />

            <div id='row2' className='inline-block'><Row2 /></div>
            <div/>

            <div id='row3'  className='inline-block'><Row3 /></div>
            <div />
            
            <div id='row4' className='inline-block'><Row4 /></div>
            <div />

            <div id='row5' className='inline-block'><Row5 /></div>
            <div/>

            <div id='row6' className='inline-block'><Row6 /></div>
            <div />

            <div id='row7' className='inline-block'><Row7 /></div>
            <div />

            <div id='row6exp' className='inline-block'><Row6exp /></div>
            <div/>

            <div id='row7exp' className='inline-block'><Row7exp /></div>
            <div/>
      </div>
    </div>
  );
}
export default App;
