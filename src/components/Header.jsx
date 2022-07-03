import { Navbar, Container, Nav, SplitButton, Dropdown, Image, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/providers/AuthProvider'
import ROUTES from '../routes/helper'

export default function Header() {
  const { pathname } = useLocation()
  const { displayName, email, photoURL, logged, logOut } = useAuth()

  return (
    <Navbar bg='light' expand='sm'>
      <Container>
        <Navbar.Brand as={Link} to={ROUTES.home()}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to={ROUTES.events()}>Eventos</Nav.Link>
          </Nav>
          {
            logged && (
              <SplitButton
                variant='outline-dark'
                title={
                  <div className='d-flex align-items-center gap-2'>
                    {displayName}
                    <Image width={24} src={photoURL} alt={email} roundedCircle />
                  </div>
                }
                id={`user-${email}`}>
                <Dropdown.Item onClick={logOut}>Salir</Dropdown.Item>
              </SplitButton>
            )
          }
          {
            !logged && pathname !== ROUTES.home() && (
              <Button variant='success' as={Link} to={ROUTES.home()}>Iniciar Sesión</Button>
            )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
