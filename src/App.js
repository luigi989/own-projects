import React from 'react';
import { NumberCell } from './cells';
import { Row1, Row2, Row3, Row4, Row5, Row6, Row6exp, Row7, Row7exp } from './rows';


function App() {
  return (
    <div className='background'>
      <header className="w-full flex items-center justify-center py-2 bg-slate-800">
        <span className='text-3xl text-slate-400'>Periodiska systemet</span>
      </header>
      <div className=" text-white flex justify-center mt-4">

        <div className='flex flex-col gap-1'>
          <NumberCell id='row1num' number='1' row='row1'/>
          <NumberCell id='row2num' number='2' row='row2'/>
          <NumberCell id='row3num' number='3' row='row3'/>
          <NumberCell id='row4num' number='4' row='row4'/>
          <NumberCell id='row5num' number='5' row='row5'/>
          <NumberCell id='row6num' number='6' row='row6'/>
          <NumberCell id='row7num' number='7' row='row7'/>
          <NumberCell id='row6num' number='6' row='row6'/>
          <NumberCell id='row7num' number='7' row='row7'/>
        </div>
        <div className='flex flex-col gap-1'>
          <div id='row1'><Row1 /></div>
          <div id='row2'><Row2 /></div>
          <div id='row3'><Row3 /></div>
          <div id='row4'><Row4 /></div>
          <div id='row5'><Row5 /></div>
          <div id='row6'><Row6 /></div>
          <div id='row7'><Row7 /></div>
          <div id='row6'><Row6exp /></div>
          <div id='row7'><Row7exp /></div>
        </div>
      </div>
    </div>
  );
}
export default App;
