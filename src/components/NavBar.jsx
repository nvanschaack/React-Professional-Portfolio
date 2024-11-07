import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

//inline styling will always override global CSS, b/c it's directly on the element, versus on a separate sheet
const style = {
    navbar: {
        color: '#dfe5f2',
        backgroundColor: '#2b6cb0',
        borderRadius: '30px'
    },
    navlinkactive: {
        fontWeight: 'bold',
        color: '#dfe5f2'
    },
    navlink: {
        color: '#dfe5f2'  // Override Bootstrap's default color
    },
    brand: {
        color: '#dfe5f2'
    }
}

export default function NavBarEl({ currentPage }) {
    // console.log(currentPage);

    return (
        <div className='mb-5 p-3'>
            <Navbar expand='lg' style={style.navbar} className='p-4'>
                <Container >
                    <Navbar.Brand style={style.brand}>Nell's Professional Portfolio </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto d-flex align-items-center'>
                            <Nav.Link
                                style={{
                                    ...style.navlink,
                                    ...(currentPage === '/Aboutme' ? style.navlinkactive : {})
                                }}
                                href="/Aboutme"
                            >
                                About Me
                            </Nav.Link> |

                            <Nav.Link
                                style={{
                                    ...style.navlink,
                                    ...(currentPage === '/' ? style.navlinkactive : {})
                                }}
                                href="/"
                            >
                                Portfolio
                            </Nav.Link> |

                            <Nav.Link
                                style={{
                                    ...style.navlink,
                                    ...(currentPage === '/Resume' ? style.navlinkactive : {})
                                }}
                                href="/Resume"
                            >
                                Resume
                            </Nav.Link> |

                            <Nav.Link
                                style={{
                                    ...style.navlink,
                                    ...(currentPage === '/Contactme' ? style.navlinkactive : {})
                                }}
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




