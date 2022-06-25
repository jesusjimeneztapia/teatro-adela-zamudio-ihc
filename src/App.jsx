import { Navbar, Container } from 'react-bootstrap'

export default function App() {
  return ( 
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
