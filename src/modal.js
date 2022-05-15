import React from 'react';
import Popup from 'reactjs-popup';

function ElementModal( {onOpen, onClose, data }) {
  const contentStyle = { background: '#FFF', width: '35%', padding: '0', borderRadius: '2rem'};
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  return (
    <Popup open={onOpen} onClose={onClose} position='center'
      {...{ contentStyle, overlayStyle }}>
      <div className='relative flex flex-col bg-[#34384B] text-white rounded-2xl'>
        {/* Header */}
        <div className='m-1 p-2 text-3xl text-center'>
          <strong>{data.name}</strong>

          <button className='absolute right-5 top-4 text-2xl px-2 rounded-full
                          hover:bg-blue-400
                          transition ease-linear duration-300'
                  onClick={onClose}>X</button>

          <hr></hr>
        </div>

        <div className='flex spacejustify-center items-center'>
          {/* Facts */}
          <ul className='basis-1/2'>
            {[['Appearance', data.appearance ? data.appearance : 'Unknown', ''], 
              ['Phase', data.phase, ''], 
              ['Atomic mass', data.atomic_mass , 'u'],
              ['Boil point', data.boil, data.boil ? <span>&#176;&#8490;</span> : 'Unknown'], 
              ['Melting point', data.melt , data.melt ? <span>&#176;&#8490;</span> : 'Unknown'], 
              ['Density', data.density, <span>g/cm&#179;</span>]]
              .map(([description, text, unit]) => (
                <li className='p-1 bg-slate-800' key={description}>
                  <strong className='text-light' >{description}: </strong>
                  <span className='text-slate-400 inline-block first-letter:uppercase'>
                    {text} {unit}
                  </span>
                </li>
              ))}
          </ul>

          {/* Image */}
          <div className='basis-1/2 flex flex-col items-center justify-center'>
            <img className='p-2 w-9/12 h-auto'
              src={ require(`./images/${data.name}.webp`) }
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
          <p className='m-0 first-letter:uppercase'>{data.category}</p>
          <p className='m-0'>{data.number} | {data.period}</p>
        </div>
      </div>
    </Popup>
  );
}

export default ElementModal;