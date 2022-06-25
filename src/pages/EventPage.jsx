import Page from '../components/Page'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ROUTES from '../routes/helper'

export default function EventPage() {
  const { eventId } = useParams()

  return (
    <Page>
      <h1>Evento '{eventId}'</h1>
      <p>Información del evento</p>
      <Link to={ROUTES.seats(eventId)}>Seleccionar butacas</Link>
    </Page>
  )
}
