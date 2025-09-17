import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return (
            <>
                <div className="navbar container">
                    <Link to="/" className='navbar-nav fw-bolder'>
                    Demo</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                            </li>
                        <li className="nav-item">
                            <Link to="/about" 
                            className="nav-link">About</Link></li>
                    </ul>
                </div>
            </>
        );
    }
}
 
export default Navbar;