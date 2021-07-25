import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container col-md-3 d-flex align-items-center justify-content-center">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/home" className="nav-link sidebar-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link sidebar-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link sidebar-link">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link sidebar-link">Contact</Link>
                </li>
                <li className="mt-5 pt-5 text-center">
                    &copy; {new Date().getFullYear()} by <br /> Md. Mehedi Hasan
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;