import './App.css';
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className='h-full'>
      <div className="flex h-full">
        <div className="bg-gray-800 basis-1/6 h-full">
          <NavLink to="/loginForm" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Login form</NavLink> <br />
          <NavLink to="/loginFormTrans" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Transparent login form</NavLink> <br />
        </div>
        <Outlet className='basis-5/6' />
      </div>
    </div>
  );
}

export default App;
