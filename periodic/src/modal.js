import React from 'react';
import { Col, Container, ListGroup, Modal, Row } from 'react-bootstrap';

function ElementModal( {closeModal, data} ) {
    return (
        <>
          <Modal className="modal" size="lg" show={true} onHide={closeModal}>
            <Modal.Header className="" closeButton>
              <Modal.Title className="w-100 text-center text-light">
                <strong>{data.name}</strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col xs={12} md={6}>
                <ListGroup>
                  <ListGroup.Item>
                    <strong className='text-light'>Appearance: </strong>
                    <span className='text-secondary'>{data.appearance}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className='text-light'>Phase: </strong>                    
                    <span className='text-secondary'>{data.phase}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className='text-light'>Atomic mass: </strong> 
                    <span className='text-secondary'>{data.atomic_mass} u</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className='text-light'>Boil point: </strong> 
                    <span className='text-secondary'>{data.boil} &#176;&#8490;</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className='text-light'>Melting point: </strong> 
                    <span className='text-secondary'>{data.melt} &#176;&#8490;</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className='text-light'>Density: </strong> 
                    <span className='text-secondary'>{data.density} g/cm&#179;</span>
                  </ListGroup.Item>
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
              <Row className="m-1 mt-3 text-light align-middle">
                <hr></hr>
                <span className='mb-3'>{data.summary}</span>
                <hr></hr>
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