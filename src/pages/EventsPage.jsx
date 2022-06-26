import Page from '../components/Page'
import { Link } from 'react-router-dom'
import ROUTES from '../routes/helper'

export default function EventsPage() {
  return (
    <Page>
      <h1>Lista de eventos</h1>
      <Link to={ROUTES.event('86ff11fc-639c-4d88-976f-9b76668ab129')}>La Imilla precoz y el lobo feroz</Link>
    </Page>
  )
}
