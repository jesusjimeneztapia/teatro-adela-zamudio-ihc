import { useEffect } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { getSeats } from '../../services/seatsService'
import { useSeats } from './providers'
import ScenaryFooter from './ScenaryFooter'
import ScenaryHeader from './ScenaryHeader'
import SeatsFirstRow from './SeatsFirstRow'
import SeatsRow from './SeatsRow'

function useScenary() {
  const { eventId, scheduleId, hourId, setScenary, scenary, isLoading } = useSeats()

  useEffect(() => {
    const request = async () => {
      let scenary = await getSeats({ eventId, scheduleId, hourId })
      scenary = scenary.reduce((prev, current) => {
        const { name } = current
        const row = name.at(-1)
        let places = [...prev[row], current]
        places = places.sort(({ name1 }, { name2 }) => name1 - name2)
        return { ...prev, [row]: places }
      }, { A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [] })
      setScenary(scenary)
    }

    if (eventId !== null && scheduleId !== null && hourId !== null) request()
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
