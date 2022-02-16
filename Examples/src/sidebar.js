import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import './sidebar.css';

import { FaPlus } from 'react-icons/fa';


const Sidebar = ({ outerContainerId, pageWrapId }) => {
  return (
    <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
        <NavLink to="/" 
                 className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>
                Home
        </NavLink>
        <NavLink to="/loginForm" 
                 className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>
                Login form
        </NavLink>
        <NavLink to="/loginFormTrans" 
                 className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>
                Transparent login form
        </NavLink>
        <NavLink to="/searchbox" 
                 className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>
                Searchbox
        </NavLink>
        <NavLink to="/profilecard">
               <div className='flex items-center'>
                    <span className=''>Profile cards</span>
                    <FaPlus className='text-xs ml-2'/>
               </div>
        </NavLink>
    </Menu>
  );
};

export default Sidebar;
