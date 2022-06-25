import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ROUTES from './helper'
import HomePage from '../pages/HomePage'
import Header from '../components/Header'
import EventsPage from '../pages/EventsPage'
import EventPage from '../pages/EventPage'
import SeatsPage from '../pages/SeatsPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.home()} element={<HomePage />} />
        <Route path={ROUTES.events()} element={<EventsPage />} />
        <Route path={ROUTES.event()} element={<EventPage />} />
        <Route path={ROUTES.seats()} element={<SeatsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
