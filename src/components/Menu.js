import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <Navbar bg="dark" variant="dark">
            <NavLink to='/'>
                <Navbar.Brand to='/'>PRO-A</Navbar.Brand>
            </NavLink>
            <Nav className="mr-auto">
                <NavLink to='/article-detail'>Article</NavLink>
                <NavLink to='/aboutus'>About Us</NavLink>
            </Nav>
            <NavLink to='/Login'>Login</NavLink>
        </Navbar>
    );
}