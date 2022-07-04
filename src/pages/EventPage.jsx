import Page from '../components/Page'
import { Col, Image, ListGroup, Row } from 'react-bootstrap'
import Information from '../components/event/Information'
import Schedule from '../components/event/Schedule'
import { useLocation } from 'react-router-dom'

export default function EventPage() {
  const { state: {title, imageURL, description, gender, duration, premiere, presentedBy} } = useLocation()

  return (
    <Page>
      <h1>{title}</h1>
      <Row>
        <Col md={12} lg={6} xl={7}>
          <Image
            src={imageURL}
            alt={title}
            style={{minWidth: '100%', maxHeight: '50vh', objectFit: 'cover', objectPosition: 'top'}}
            fluid
            thumbnail
          />
        </Col>
        <Col md={12} lg={6} xl={5}>
          <ListGroup variant='flush'>
            <Information 
              title='descripción'
              detail={description}
            />
            <Information title='género' detail={gender} />
            <Information title='duración' detail={duration} />
            <Information title='estreno' detail={premiere} />
            <Information title='presentado por' detail={presentedBy} />
          </ListGroup>
        </Col>
      </Row>
      <Schedule />
    </Page>
  )
}
