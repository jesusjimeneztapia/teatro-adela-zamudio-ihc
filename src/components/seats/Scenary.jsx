import { collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { db } from '../../firebase/firebaseConfig'
import { useSeats } from './providers'
import ScenaryFooter from './ScenaryFooter'
import ScenaryHeader from './ScenaryHeader'
import SeatsFirstRow from './SeatsFirstRow'
import SeatsRow from './SeatsRow'

function useScenary() {
  const { eventId, scheduleId, hourId, setScenary, scenary, isLoading } = useSeats()

  useEffect(() => {
    const seatsCollection = collection(db, `Eventos/${eventId}/Schedules/${scheduleId}/Hours/${hourId}/Seats`)
    const q = query(seatsCollection)
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const scenary = {}
      querySnapshot.forEach((doc) => {
        const { name, places } = doc.data()
        scenary[name] = places.map((place, index) => {
          const placeName = `${index + 1}${name}`
          if (typeof place === 'boolean') {
            return { name: placeName, state: 'available' }
          } else {
            const [userName, state, date] = place.split(';')
            return { name: placeName, userName, state, date: parseInt(date) } 
          }
        })
      })
      setScenary(scenary)
    })

    return () => unsubscribe()
  }, [eventId, scheduleId, hourId])

  return { scenary, isLoading }
}

export default function Scenary() {
  const { scenary, isLoading } = useScenary()

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center my-3'>
        <Spinner animation='border' />
      </div>
    )
  }

  return (
    <Container>
      <Row>
        <Col className='py-4 shadow-sm rounded' xs={12} lg={{offset: 2, span: 8}} xl={{offset: 3, span: 6}}>
          <ScenaryHeader />
          <SeatsRow places={scenary.A} row='A' />
          <SeatsRow places={scenary.B} row='B' />
          <SeatsRow places={scenary.C} row='C' />
          <SeatsRow places={scenary.D} row='D' />
          <SeatsRow places={scenary.E} row='E' />
          <SeatsRow places={scenary.F} row='F' />
          <SeatsRow places={scenary.G} row='G' />
          <SeatsRow places={scenary.H} row='H' />
          <SeatsFirstRow placesLeft={scenary.I.slice(0, 2)} placesRight={scenary.I.slice(2, 4)} row='I' />
          <ScenaryFooter />
        </Col>
      </Row>
    </Container>
  )
}
