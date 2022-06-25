const ROUTES = {
  home: () => '/',
  events: () => '/events',
  event: (eventId) => `/events/${eventId ?? ':eventId'}`,
  seats: (eventId) => `/events/${eventId ?? ':eventId'}/seats`
}

export default ROUTES