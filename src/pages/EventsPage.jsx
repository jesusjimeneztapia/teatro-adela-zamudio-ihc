import Page from '../components/Page'
import { EventsProvider } from '../components/events/providers'
import EventsList from '../components/events/EventsList'
import Filter from '../components/events/Filter'

export default function EventsPage() {
  return (
    <Page>
      <EventsProvider>
        <Filter />
        <EventsList />
      </EventsProvider>
    </Page>
  )
}
