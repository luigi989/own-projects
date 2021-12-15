import './App.css';
import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="sidenav">
        <NavLink to="/bin2Dec" className={isActive => "linkActive" + (!isActive ? " linkInactive" : "")}>Bin2Dec</NavLink> <br />
        <NavLink to="/borderRadiousPreviewer" className={isActive => "linkActive" + (!isActive ? " linkInactive" : "")}>Border radious previewer</NavLink>
      </div>
      <Outlet />
    </div>
  );
}