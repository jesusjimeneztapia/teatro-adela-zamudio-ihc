import Page from '../components/Page'
import { EventsProvider } from '../components/events/providers'
import EventsList from '../components/events/EventsList'

export default function EventsPage() {
  return (
    <Page>
      <EventsProvider>
        <EventsList />
      </EventsProvider>
    </Page>
  )
}
