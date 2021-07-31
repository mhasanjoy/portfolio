import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sidebar-container col-lg-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: 'grey' }}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-12" id="navbarNav">
                    <ul className="navbar-nav flex-column" style={{ margin: "0 auto" }}>
                        <li className="nav-item">
                            <Link to="/home" className="nav-link"><span className="sidebar-link">Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link"><span className="sidebar-link">About</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link"><span className="sidebar-link">Projects</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link"><span className="sidebar-link">Contact</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;