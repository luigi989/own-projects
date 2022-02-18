import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import './sidebar.css';

import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';


const Sidebar = ({ outerContainerId, pageWrapId }) => {
  const [cardsOpen, setCardsOpen] = useState(false);
  const [loginFormsOpen, setLoginFormsOpen] = useState(false);
  const [buttonsOpen, setButtonsOpen] = useState(false);

  return (
    <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
        <NavLink to="/" 
                 className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>
                Home
        </NavLink>
        <div>
          <div className='flex items-center cursor-pointer' onClick={() => setButtonsOpen(!buttonsOpen)}>
            <span className=''>Button effects</span>
            {buttonsOpen ? <FaMinus className='text-xs ml-2'/> : <FaPlus className='text-xs ml-2'/>}
          </div>
        </div>
        {buttonsOpen ? 
        <div>
          <div className='flex flex-col ml-4'>  
            <NavLink to='/neonEffect'>Neon Effects</NavLink>
          </div>
        </div> : null}

        <div>
          <div className='flex items-center cursor-pointer' onClick={() => setLoginFormsOpen(!loginFormsOpen)}>
            <span className=''>Login forms</span>
            {loginFormsOpen ? <FaMinus className='text-xs ml-2'/> : <FaPlus className='text-xs ml-2'/>}
          </div>
        </div>
        {loginFormsOpen ? 
        <div>
          <div className='flex flex-col ml-4'>
            <NavLink to="/loginForm">Login form</NavLink>
            <NavLink to="/loginFormTrans">Transparent login form</NavLink>
          </div>
        </div> : null}

        <NavLink to="/searchbox">Searchbox</NavLink>

        <div>
          <div className='flex items-center cursor-pointer' onClick={() => setCardsOpen(!cardsOpen)}>
            <span className=''>Profile cards</span>
            {cardsOpen ? <FaMinus className='text-xs ml-2'/> : <FaPlus className='text-xs ml-2'/>}
          </div>
        </div>
        {cardsOpen ? 
        <div>
          <div className='flex flex-col ml-4'>
            <NavLink to="/profilecard" className=''>Profile card 1</NavLink>
            <NavLink to="/profilecard2" className=''>Profile card 2</NavLink>
          </div>
        </div> : null}
    </Menu>
  );
};

export default Sidebar;
