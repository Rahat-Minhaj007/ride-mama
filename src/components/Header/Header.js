import React, { useContext } from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const {name,photo} = loggedInUser;
    
    return (
        <div className="navi">
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="/home"><h1>RIDE MAMA</h1></ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Brand >
                    <ReactBootStrap.Form inline>
                        <ReactBootStrap.FormControl variant='white' type="text" placeholder="Search Your Destination...." />
                    </ReactBootStrap.Form>
                </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">


                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="/home">Home</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/destination">Destination</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="/blog">
                            Blog
                </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/contact">Contact</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/login"><button className="btn btn-warning">{name?.length > 0 ?'Log Out': 'Log In' }</button></ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#">{name?.length > 0 ?<button className="btn btn-warning"><img style={{width:"30px",borderRadius :"50%"}} src={photo} alt=""/> {name}</button> :null}</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>

        </div>
    );
};

export default Header;