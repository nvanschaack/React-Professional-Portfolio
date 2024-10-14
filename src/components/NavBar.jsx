import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

const style = {
    navbar: {
        color: 'black',
        backgroundColor: 'hsl(210, 80%, 60%)',
    },
    navlink: {
        color: 'pink'
    },
    navlinkactive: {
        fontWeight: 'bold'
    }
}

export default function NavBarEl({ currentPage }) {
    console.log(currentPage);

    // const navLinkStyle = () => {
    //     if (currentPage === '/Aboutme') {
    //         return style.navlinkactive
    //     } else if (currentPage === '/') {
    //         return style.navlinkactive
    //     } else if (currentPage === '/Resume') {
    //         return style.navlinkactive
    //     } else if (currentPage === '/Contactme'){
    //         return style.navlinkactive
    //     } else {
    //         return undefined
    //     }
    // }

    return (
        <div className='mb-5 p-3'>
            <Navbar expand='lg' style={style.navbar} className='p-4'>
                <Container >
                    <Navbar.Brand>Nell's Professional Portfolio </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto d-flex align-items-center'>
                            <Nav.Link
                                style={currentPage === '/Aboutme' ? style.navlinkactive : {}}
                                href="/Aboutme"
                            >
                                About Me
                            </Nav.Link> |

                            <Nav.Link
                                style={currentPage === '/' ? style.navlinkactive : {}}
                                href="/"
                            >
                                Portfolio
                            </Nav.Link> |

                            <Nav.Link
                                style={currentPage === '/Resume' ? style.navlinkactive : {}}
                                href="/Resume"
                            >
                                Resume
                            </Nav.Link> |

                            <Nav.Link
                                style={currentPage === '/Contactme' ? style.navlinkactive : {}}
                                href="/Contactme"
                            >
                                Contact Me
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}




