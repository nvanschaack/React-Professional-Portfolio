import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

const style = {
    navbar: {
        color: 'black',
        backgroundColor: 'hsl(210, 80%, 60%)',
    }
}

export default function NavBarEl({ currentPage }) {
    // console.log(currentPage);
    return (
        <div className='mb-5 p-3'>
            <Navbar expand='lg' style={style.navbar} className='p-4'>
                <Container >
                    <Navbar.Brand>Nell's Professional Portfolio </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto d-flex align-items-center'>

                            <Nav.Link style={style.navbar} href="/Aboutme" className={currentPage === '/Aboutme' ? 'active' : ''}>About Me</Nav.Link> |

                            <Nav.Link style={style.navbar} href="/" className={currentPage === '/' ? 'active' : ''}>Portfolio</Nav.Link> |

                            <Nav.Link style={style.navbar} href="/Resume" className={currentPage === '/Resume' ? 'active' : ''}>Resume</Nav.Link> |

                            <Nav.Link style={style.navbar} href="/Contactme" className={currentPage === '/Contactme' ? 'active' : ''}>Contact Me</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}




