import { Col, Container, Row } from 'react-bootstrap'
import Place from './Place'
import { useSeats } from './providers'

export default function SeatsFirstRow({ placesLeft, placesRight, row }) {
  const { togglePlace } = useSeats()

  return (
    <Container>
      <Row>
        {
          placesLeft.map(({ name, ...rest }) => (
            <Col className='d-flex justify-content-center' xs={1} key={name}>
              <Place name={name} {...rest} onClick={() => togglePlace(name)} />
            </Col>
          ))
        }
        {
          Array.from({ length: 7 }, (_, index) => index).map((value) => <Col xs={1} className='bg-secondary mt-3' key={value}></Col>)
        }
        {
          placesRight.map(({ name, ...rest }) => (
            <Col className='d-flex justify-content-center' xs={1} key={name}>
              <Place name={name} {...rest} onClick={() => togglePlace(name)} />
            </Col>
          ))
        }
        <Col xs={1} className='d-flex align-items-center justify-content-center fw-bold text-muted'>{row}</Col>
        <Col className='bg-secondary' xs={11}>
          <p className='p-0 mt-1 mb-1 fs-4 text-center text-light'>ESCENARIO</p>
        </Col>
      </Row>
    </Container>
  )
}