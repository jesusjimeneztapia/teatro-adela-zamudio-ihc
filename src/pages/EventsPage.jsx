import Page from '../components/Page'
import { EventsProvider } from '../components/events/providers'
import EventsList from '../components/events/EventsList'
import Filter from '../components/events/Filter'
import Search from '../components/events/Search'

export default function EventsPage() {
  return (
    <Page>
      <EventsProvider>
        <Search />
        <Filter />
        <EventsList />
      </EventsProvider>
    </Page>
  )
}
