import Hour from './Hour'
import { useSchedule } from './providers'

export default function Hours() {
  const { hours, setHourId } = useSchedule()

  if (!hours.length) return <></>

  return (
    <div className='d-flex gap-3 p-2 bg-light mt-0'>
      {
        hours.map(({ id, hour }) => <Hour key={id} hour={hour} onClick={() => setHourId(id)} />)
      }
    </div>
  )
}
