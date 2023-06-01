import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBarStyle.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import Documents from '../Pages/Documents';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">
                            Avangarda
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className='mr-auto'>
                                <Nav.Link href="/"> Главная </Nav.Link>
                                <Nav.Link href="/blog"> График тренировок </Nav.Link>
                                <Nav.Link href="/documents"> Документы </Nav.Link>
                                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" element={< Home />} />
                        <Route exact path="/blog" element={<Blog/>} />
                        <Route exact path="/documents" element={<Documents/>} />
                        <Route exact path="/contacts" element={<Contacts/>} />
                    </Routes>
                </Router>  
            </>
        );
    }
}
