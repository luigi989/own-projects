import React from 'react';
import { Col, Container, ListGroup, Modal, Row } from 'react-bootstrap';

function ElementModal( {closeModal, data} ) {
console.log(`https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Electron_shell_${data.number}_${data.name}_-_no_label.svg/800px-Electron_shell_${data.number}_${data.name}_-_no_label.svg.png`);
    return (
        <>
          <Modal className="modal" show={true} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title className="w-100 text-center text-light">{data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col xs={12} md={8}>
                <ListGroup>
                  <ListGroup.Item variant="dark">Appearance: {data.appearance}</ListGroup.Item>
                  <ListGroup.Item variant="dark">Phase: {data.phase}</ListGroup.Item>
                  <ListGroup.Item variant="dark">Atomic mass: {data.atomic_mass} u</ListGroup.Item>
                  <ListGroup.Item variant="dark">Boil point: {data.boil} &#8490;</ListGroup.Item>
                  <ListGroup.Item variant="dark">Melting point: {data.melt} &#8490;</ListGroup.Item>
                  <ListGroup.Item variant="dark">Density: {data.density} g/L</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col xs={6} md={4} className="text-light">
                  <img 
                    className='w-100'
                    src={ require(`./images/${data.name}.png`).default }
                    alt={`${data.name} atomic model`}
                  ></img>
                </Col>
              </Row>
              <Row className="p-3 text-light">
                {data.summary}
              </Row>

              <Container className="w-100 text-center text-light">
                {data.category}<br/>
                {data.number} | {data.period}
              </Container>
            </Modal.Body>
          </Modal>
        </>
      );
}

export default ElementModal;