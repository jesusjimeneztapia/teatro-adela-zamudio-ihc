import { createContext, useContext, useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ROUTES from '../../routes/helper'
import { scheduleReducer, SCHEDULE_INITIAL_STATE } from './reducers'

const ScheduleContext = createContext({
  ...SCHEDULE_INITIAL_STATE,
  setSchedules(schedules) {},
  setScheduleId(scheduleId) {},
  setHourId(hourId) {}
})

export function useSchedule() {
  const scheduleContext = useContext(ScheduleContext)
  return scheduleContext
}

function useScheduleProvider() {
  const navigate = useNavigate()
  const { eventId } = useParams()
  const [schedule, dispatchSchedule] = useReducer(scheduleReducer, SCHEDULE_INITIAL_STATE)

  useEffect(() => {
    const { hourId } = schedule
    if (hourId !== null) {
      const { scheduleId, day, hour } = schedule
      navigate(ROUTES.seats(eventId), {
        state: {
          scheduleId, day, hourId, hour
        }
      })
    }
  }, [schedule])

  const setSchedules = (schedules) => {
    dispatchSchedule({ type: 'setSchedules', payload: schedules })
  }

  const setScheduleId = (scheduleId) => {
    dispatchSchedule({ type: 'setScheduleId', payload: scheduleId })
  }

  const setHourId = (hourId) => {
    dispatchSchedule({ type: 'setHourId', payload: hourId })
  }

  return { ...schedule, eventId, setSchedules, setScheduleId, setHourId }
}

export function ScheduleProvider({ children }) {
  const scheduleProviderValue = useScheduleProvider()

  return (
    <ScheduleContext.Provider value={scheduleProviderValue}>
      {children}
    </ScheduleContext.Provider>
  )
}