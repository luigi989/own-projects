import React from 'react';
import Popup from 'reactjs-popup';
import { Col, Container, ListGroup, Modal, Row } from 'react-bootstrap';

function ElementModal( {onOpen, onClose, data }) {
  const contentStyle = { background: '#FFF', width: '35%', padding: '0', borderRadius: '2rem'};
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  return (
    <Popup open={onOpen} onClose={onClose} position='center'
      {...{ contentStyle, overlayStyle }}>
      <div className='flex flex-col bg-[#34384B] text-white rounded-2xl'>
        {/* Header */}
        <div className='m-1 p-2 text-3xl text-center'>
          <strong>{data.name}</strong>
          <hr></hr>
        </div>

        <div className='flex justify-between'>
          {/* Facts */}
          <ul>
            <li>
              <strong className='text-light'>Appearance: </strong>
              <span className='text-slate-500'>{data.appearance}</span>
            </li>
            <li>
              <strong className='text-light'>Phase: </strong>                    
              <span className='text-slate-500'>{data.phase}</span>
            </li>
            <li>
              <strong className='text-light'>Atomic mass: </strong> 
              <span className='text-slate-500'>{data.atomic_mass} u</span>
            </li>
            <li>
              <strong className='text-light'>Boil point: </strong> 
              <span className='text-slate-500'>{data.boil} &#176;&#8490;</span>
            </li>
            <li>
              <strong className='text-light'>Melting point: </strong> 
              <span className='text-slate-500'>{data.melt} &#176;&#8490;</span>
            </li>
            <li>
              <strong className='text-light'>Density: </strong> 
              <span className='text-slate-500'>{data.density} g/cm&#179;</span>
            </li>
          </ul>

          {/* Image */}
          <div className='flex flex-col items-center justify-center'>
            <img className='w-100 p-2'
              src={ require(`./images/${data.name}.png`) }
              alt={`${data.name} atomic model`} />
          </div>
        </div>

        {/* Description */}
        <div className="m-1 px-2 text-light align-middle">
            <hr></hr>
            <span>{data.summary}</span>
            <hr className='mb-1'></hr>
        </div>

        {/* Row and Col number */}
        <div className="mb-2 w-100 text-center text-white">
          {data.category}<br/>
          {data.number} | {data.period}
        </div>
      </div>
    </Popup>
  );
}

// function ElementModal( {closeModal, data} ) {
//     return (
//         <>
//           <Modal className="modal" size="lg" show={true} onHide={closeModal}>
//             <Modal.Header className="" closeButton>
//               <Modal.Title className="w-100 text-center text-light">
//                 <strong>{data.name}</strong>
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Row>
//                 <Col xs={12} md={6}>
//                 <ListGroup>
//                   <ListGroup.Item>
//                     <strong className='text-light'>Appearance: </strong>
//                     <span className='text-secondary'>{data.appearance}</span>
//                   </ListGroup.Item>
//                   <ListGroup.Item>
//                     <strong className='text-light'>Phase: </strong>                    
//                     <span className='text-secondary'>{data.phase}</span>
//                   </ListGroup.Item>
//                   <ListGroup.Item>
//                     <strong className='text-light'>Atomic mass: </strong> 
//                     <span className='text-secondary'>{data.atomic_mass} u</span>
//                   </ListGroup.Item>
//                   <ListGroup.Item>
//                     <strong className='text-light'>Boil point: </strong> 
//                     <span className='text-secondary'>{data.boil} &#176;&#8490;</span>
//                   </ListGroup.Item>
//                   <ListGroup.Item>
//                     <strong className='text-light'>Melting point: </strong> 
//                     <span className='text-secondary'>{data.melt} &#176;&#8490;</span>
//                   </ListGroup.Item>
//                   <ListGroup.Item>
//                     <strong className='text-light'>Density: </strong> 
//                     <span className='text-secondary'>{data.density} g/cm&#179;</span>
//                   </ListGroup.Item>
//                 </ListGroup>
//                 </Col>
//                 <Col xs={12} md={6} 
//                     className="text-light d-flex flex-column 
//                     justify-content-center align-items-center">
//                   <img 
//                     className='w-50 p-2'
//                     src={ require(`./images/${data.name}.png`).default }
//                     alt={`${data.name} atomic model`}
//                   ></img>
//                 </Col>
//               </Row>
//               <Row className="m-1 mt-3 text-light align-middle">
//                 <hr></hr>
//                 <span className='mb-3'>{data.summary}</span>
//                 <hr></hr>
//               </Row>

//               <Container className="w-100 text-center text-light">
//                 {data.category}<br/>
//                 {data.number} | {data.period}
//               </Container>
//             </Modal.Body>
//           </Modal>
//         </>
//       );
// }

export default ElementModal;