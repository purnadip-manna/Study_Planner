import { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import ProfilePic from '../img/profile-pic.png';

class MyNavbar extends Component {
    render() { 
        return (
            <Navbar bg="light" variant="light" className="shadow fixed-top">
                <Navbar.Brand href="#"><h3>My Planner</h3></Navbar.Brand>
                <Nav className="ml-auto">
                <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    <img src={ ProfilePic } className="profilePic" alt="DP"></img>
                    </span>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="navDropdown">
                    <span className="dropdown-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person mb-1 mr-2" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path></svg>
                        Profile
                    </span>
                    <span className="dropdown-item">
                    <svg viewBox="64 64 896 896" focusable="false" className="mr-2" data-icon="logout" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"></path></svg>
                        Log Out
                    </span>
                    </div>
                </li>
                </Nav>
            </Navbar>
        );
    }
}
 
export default MyNavbar;