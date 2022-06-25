import { Container } from 'react-bootstrap'

export default function Page({ children }) {
  return (
    <Container className='py-1'>
      {children}
    </Container>
  )
}
