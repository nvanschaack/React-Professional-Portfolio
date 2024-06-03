import React from 'react'
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    return (
        <div className=''>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Contact Me</Nav.Link>
                </Nav.Item>
            </Nav>
            <h1>
                Professional Portfolio
            </h1>
        </div>
    )
}




