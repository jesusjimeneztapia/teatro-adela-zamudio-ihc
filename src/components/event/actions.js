export const SCHEDULE_ACTIONS = {
  setSchedules: (state, schedules) => {
    return { ...state, schedules, isLoading: false }
  },
  setScheduleId: (state, scheduleId) => {
    const { schedules } = state
    const { day, dayNumber, hours } = schedules.find(({ id }) => scheduleId === id)
    return { ...state, hours, scheduleId, day: { name: day, number: dayNumber } }
  },
  setHourId: (state, hourId) => {
    const { hours } = state
    const { hour } = hours.find(({ id }) => hourId === id)
    return { ...state, hourId, hour }
  }
}