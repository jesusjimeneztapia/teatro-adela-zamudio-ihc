import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../../routes/helper'
import EventCard from './EventCard'
import { useEvents } from './providers'

export default function EventsList() {
  const navigate = useNavigate()
  const { filteredEvents } = useEvents()

  const handleClick = ({ id, title, imageURL, gender, duration, premiere, presentedBy, description }) => () => {
    navigate(ROUTES.event(id), {
      state: {
        title,
        imageURL,
        gender,
        duration,
        premiere,
        presentedBy,
        description
      }
    })
  }

  return (
    <Row>
      {
        filteredEvents.map(({ id, description, duration, gender, imageURL, presentedBy, premiere, title }) => (
          <Col className='mb-3' key={id} xs={12} sm={6} md={4} lg={3}>
            <EventCard
              imageURL={imageURL}
              presentedBy={presentedBy}
              title={title}
              onClick={handleClick({id, description, duration, gender, imageURL, premiere, presentedBy, title})} />
          </Col>
        ))
      }
    </Row>
  )
}
