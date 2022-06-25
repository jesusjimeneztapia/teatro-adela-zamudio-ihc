import Page from '../components/Page'
import { Link } from 'react-router-dom'
import ROUTES from '../routes/helper'

export default function EventsPage() {
  return (
    <Page>
      <h1>Lista de eventos</h1>
      <Link to={ROUTES.event('id-del-evento-1')}>Evento 1</Link>
    </Page>
  )
}
