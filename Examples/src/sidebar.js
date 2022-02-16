import React from 'react';
import { scaleDown as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import './sidebar.css';

const Sidebar = ({
//here's where I pass the props from App.js
  outerContainerId,
  pageWrapId,
}) => {
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
    </Menu>
  );
};

export default Sidebar;
