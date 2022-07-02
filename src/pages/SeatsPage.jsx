import Page from '../components/Page'
import Scenary from '../components/seats/Scenary'
import SelectedDetails from '../components/seats/SelectedDetails'
import { SeatsProvider } from '../components/seats/providers'

export default function SeatsPage() {
  return (
    <Page>
      <h1>Seleccionar butacas</h1>
      <SeatsProvider>
        <Scenary />
        <SelectedDetails />
      </SeatsProvider>
    </Page>
  )
}
