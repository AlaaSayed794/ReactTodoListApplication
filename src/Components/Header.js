import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Todos App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/tempRoute">Link</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
