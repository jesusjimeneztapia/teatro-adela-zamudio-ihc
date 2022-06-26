import Hours from './Hours'
import { ScheduleProvider } from './providers'
import ScheduleForm from './ScheduleForm'

export default function Schedule() {
  return (
    <>
      <p className='fw-bold mt-2 mb-2'>Seleccione un horario</p>
      <ScheduleProvider>
        <ScheduleForm />
        <Hours />
      </ScheduleProvider>
    </>
  )
}
