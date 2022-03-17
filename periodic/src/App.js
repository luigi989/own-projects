import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import { Row1, Row2, Row3, Row4, Row5, Row6, Row7, Row6exp, Row7exp } from './rows';

function App() {
  return (
    <div className='background'>
      <header className="w-full flex items-center justify-center py-2 bg-slate-800">
        <span className='text-3xl text-slate-400'>Periodiska systemet</span>
      </header>
      <div className="mx-auto w-fit">
        <Row1></Row1>
        <Row2></Row2>
        <Row3></Row3>
        <Row4></Row4>
        <Row5></Row5>
        <Row6></Row6>
        <Row7></Row7>
        <Row6exp></Row6exp>
        <Row7exp></Row7exp>
      </div>
    </div>
  );
}
export default App;
