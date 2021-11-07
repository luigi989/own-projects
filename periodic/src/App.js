import './App.css';
import { Container, Navbar } from 'react-bootstrap';

import { Row1, Row2, Row3, Row4, Row5, Row6, Row7, Row6exp, Row7exp } from './rows';

function App() {


  return (
    <div className='background'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="#home">Periodiska systemet</Navbar.Brand>
        </Container>
      </Navbar>

      <div className="fit-content">
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
