import { useEffect } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { getSchedules } from '../../services/scheduleService'
import DayButton from './DayButton'
import { useSchedule } from './providers'

function useScheduleForm() {
  const { eventId, isLoading, schedules, scheduleId, setSchedules, setScheduleId } = useSchedule()

  useEffect(() => {
    const request = async () => {
      const schedules = await getSchedules(eventId)
      setSchedules(schedules)
    }

    if (eventId !== null) request()
  }, [eventId])

  return { isLoading, schedules, scheduleId, setScheduleId }
}

export default function ScheduleForm() {
  const { isLoading, schedules, scheduleId, setScheduleId } = useScheduleForm()

  if (isLoading) {
    return (
      <div className='ps-5 mt-3'>
        <Spinner animation='border' />
      </div>
    )
  }

  return (
    <Form>
      <Form.Group className='d-flex gap-3'>
        {
          schedules.map(({ id, day, dayNumber }) => (
            <DayButton 
              key={id}
              day={day}
              dayNumber={dayNumber}
              onClick={() => setScheduleId(id)}
              checked={id === scheduleId}
            />
          ))
        }
      </Form.Group>
    </Form>
  )
}
