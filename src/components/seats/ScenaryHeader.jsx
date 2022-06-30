import { Col, Container, Row } from 'react-bootstrap'

export default function ScenaryHeader() {
  return (
    <Container>
      <Row>
        {
          Array.from({ length: 11 }, (_, index) => index + 1).map((value) => (
            <Col key={value} xs={1} className='d-flex justify-content-center text-muted fw-bold'>{value}</Col>
          ))
        }
      </Row>
    </Container>
  )
}
