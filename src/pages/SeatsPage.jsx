import Page from '../components/Page'
import Scenary from '../components/seats/Scenary'
import SelectedDetails from '../components/seats/SelectedDetails'
import { SeatsProvider } from '../components/seats/providers'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

export default function SeatsPage() {
  return (
    <Page>
      <h1>Seleccionar butacas</h1>
      <Elements stripe={stripePromise} options={{ locale: 'es' }}>
        <SeatsProvider>
          <Scenary />
          <SelectedDetails />
        </SeatsProvider>
      </Elements>
    </Page>
  )
}
