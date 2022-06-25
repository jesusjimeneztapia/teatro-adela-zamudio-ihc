import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ROUTES from '../routes/helper'

export default function Header() {
  return (
    <Navbar bg='light' expand='sm'>
      <Container>
        <Navbar.Brand as={Link} to={ROUTES.home()}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to={ROUTES.events()}>Eventos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
