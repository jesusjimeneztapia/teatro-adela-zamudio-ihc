import { Col, Container, Row } from 'react-bootstrap'
import Place from './Place'
import { useSeats } from './providers'

export default function SeatsRow({ places, row }) {
  const { togglePlace } = useSeats()

  return (
    <Container>
      <Row>
        {
          places.map(({ id, name, state }) => (
            <Col className='d-flex justify-content-center' xs={1} key={id}>
              <Place name={name} state={state} onClick={() => togglePlace(name)} />
            </Col>
          ))
        }
        <Col xs={1} className='d-flex align-items-center justify-content-center fw-bold text-muted'>{row}</Col>
      </Row>
    </Container>
  )
}