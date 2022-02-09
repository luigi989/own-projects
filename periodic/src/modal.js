import React from 'react';
import { Col, Container, ListGroup, Modal, Row } from 'react-bootstrap';

function ElementModal( {closeModal, data} ) {
    return (
        <>
          <Modal className="modal" size="lg" show={true} onHide={closeModal}>
            <Modal.Header className="" closeButton>
              <Modal.Title className="w-100 text-center text-light">{data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col xs={12} md={6}>
                <ListGroup>
                  <ListGroup.Item className='text-light' variant="dark">Appearance: {data.appearance}</ListGroup.Item>
                  <ListGroup.Item className='text-light' variant="dark">Phase: {data.phase}</ListGroup.Item>
                  <ListGroup.Item className='text-light' variant="dark">Atomic mass: {data.atomic_mass} u</ListGroup.Item>
                  <ListGroup.Item className='text-light' variant="dark">Boil point: {data.boil} &#8490;</ListGroup.Item>
                  <ListGroup.Item className='text-light' variant="dark">Melting point: {data.melt} &#8490;</ListGroup.Item>
                  <ListGroup.Item className='text-light' variant="dark">Density: {data.density} g/L</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col xs={12} md={6} 
                    className="text-light d-flex flex-column 
                    justify-content-center align-items-center">
                  <img 
                    className='w-50 p-2'
                    src={ require(`./images/${data.name}.png`).default }
                    alt={`${data.name} atomic model`}
                  ></img>
                </Col>
              </Row>
              <Row className="desc m-2 mt-3 p-2 text-light align-middle">
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