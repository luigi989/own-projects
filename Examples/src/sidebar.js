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
  const [miscOpen, setMiscOpen] = useState(false);

  const hoverColor = " hover:text-[#aa2222]";

  return (
    <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
      <div className='space-y-0.5'>
        <NavLink to="/" 
                 className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive') + hoverColor}>
                  Home
        </NavLink>
        <div>
          <div className={`flex items-center cursor-pointer` + hoverColor} onClick={() => setButtonsOpen(!buttonsOpen)}>
            <span className={(buttonsOpen ? 'underline' : 'text-none')}>Button effects</span>
            {buttonsOpen ? <FaMinus className='text-xs ml-2'/> : <FaPlus className='text-xs ml-2'/>}
          </div>
        </div>
        {buttonsOpen ? 
        <div>
          <div className='flex flex-col ml-4'>  
            <NavLink to='/neonEffect'
                     className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive') + hoverColor}>
                     Neon Effects
            </NavLink>
            <NavLink to='/hoverEffect'
                    className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive') + hoverColor}>
                    Hover Effect
            </NavLink>
          </div>
        </div> : null}

        <div>
          <div className={`flex items-center cursor-pointer` + hoverColor} onClick={() => setLoginFormsOpen(!loginFormsOpen)}>
            <span className={(loginFormsOpen ? 'underline' : 'text-none')}>Login forms</span>
            {loginFormsOpen ? <FaMinus className='text-xs ml-2'/> : <FaPlus className='text-xs ml-2'/>}
          </div>
        </div>
        {loginFormsOpen ? 
        <div>
          <div className='flex flex-col ml-4'>
            <NavLink to="/loginForm"
                     className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive') + hoverColor}>
                     Login form
            </NavLink>
            <NavLink to="/loginFormTrans"
                     className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive') + hoverColor}>
                     Transparent login form
            </NavLink>
          </div>
        </div> : null}

        <div>
          <div className={`flex items-center cursor-pointer` + hoverColor} onClick={() => setMiscOpen(!miscOpen)}>
            <span className={(miscOpen ? 'underline' : 'text-none')}>Miscellaneous</span>
            {miscOpen ? <FaMinus className='text-xs ml-2'/> : <FaPlus className='text-xs ml-2'/>}
          </div>
        </div>
        {miscOpen ? 
        <div>
          <div className='flex flex-col ml-4'>
            <NavLink to="/searchbox"
                     className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive') + hoverColor}>
                     Searchbox
            </NavLink>
          </div>
        </div> : null}

        <div>
          <div className={`flex items-center cursor-pointer` + hoverColor} onClick={() => setCardsOpen(!cardsOpen)}>
            <span className={(cardsOpen ? 'underline' : 'text-none')}>Profile cards</span>
            {cardsOpen ? <FaMinus className='text-xs ml-2'/> : <FaPlus className='text-xs ml-2'/>}
          </div>
        </div>
        {cardsOpen ? 
        <div>
          <div className='flex flex-col ml-4'>
            <NavLink to="/profilecard" 
                     className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive') + hoverColor}>
                     Profile card 1
            </NavLink>
            <NavLink to="/profilecard2"
                     className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive') + hoverColor}>
                     Profile card 2
            </NavLink>
          </div>
        </div> : null}
      </div>
    </Menu>
  );
};

export default Sidebar;
