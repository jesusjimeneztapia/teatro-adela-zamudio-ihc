import { MdEventSeat } from 'react-icons/md'

export default function ScenaryFooter() {
  return (
    <div className='pt-4 d-flex flex-wrap justify-content-center gap-3'>
      <p className='d-flex m-0 gap-2'>
        <MdEventSeat className='text-secondary' size={24} />
        <span>Disponible</span>
      </p>
      <p className='d-flex m-0 gap-2'>
        <MdEventSeat className='text-black' size={24} />
        <span>Ocupado</span>
      </p>
      <p className='d-flex m-0 gap-2'>
        <MdEventSeat className='text-warning' size={24} />
        <span>Reservado</span>
      </p>
      <p className='d-flex m-0 gap-2'>
        <MdEventSeat className='text-danger' size={24} />
        <span>Seleccionado</span>
      </p>
      <p className='d-flex m-0 gap-2'>
        <MdEventSeat className='text-info' size={24} />
        <span>Comprado por ti</span>
      </p>
    </div>
  )
}