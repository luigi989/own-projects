import './App.css';
import React, { useState } from "react";
import { Container, Navbar, Stack } from 'react-bootstrap';

import { Row1, Row2, Row3, Row4, Row5, Row6, Row7, Row6exp, Row7exp } from './rows';
import Cell from './cell';

function App() {
  // const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Container fluid>
      <Navbar bg='dark' variant='dark'>
        <Container fluid>
          <Navbar.Brand href="#home">Periodiska systemet</Navbar.Brand>
        </Container>
      </Navbar>

      <div className="bg-dark">
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
    </Container>
  );
}

export default App;
