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
          <ul className='w-1/2'>
            {[['Appearance', data.appearance, ''], 
              ['Phase', data.phase, ''], 
              ['Atomic mass', data.atomic_mass , 'u'],
              ['Boil point', data.boil, <span>&#176;&#8490;</span>], 
              ['Melting point', data.melt , <span>&#176;&#8490;</span>], 
              ['Density', data.density, <span>g/cm&#179;</span>]]
              .map(([description, text, unit]) => (
                <li className='p-1 bg-slate-800'>
                  <strong className='text-light' >{description}: </strong>
                  <span className='text-slate-500'>{text} {unit}</span>
                </li>
              ))}
          </ul>

          {/* Image */}
          <div className='w-1/3 h-1/3 mr-16 flex flex-col items-center justify-center'>
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

export default ElementModal;