import Page from '../components/Page'
import { useParams } from 'react-router-dom'

export default function SeatsPage() {
  const {eventId} = useParams()

  return (
    <Page>
      <h1>Seleccionar butacas</h1>
      <p>Selección de butacas del evento '{eventId}'</p>
    </Page>
  )
}
