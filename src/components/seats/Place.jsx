import { MdEventSeat } from 'react-icons/md'

export default function Place({ name, state, onClick }) {
  return (
    <span className='pb-1' onClick={onClick}>
      <MdEventSeat
        className={`${state === 'available'? 'text-secondary': state === 'occupied' ? 'text-black': 'text-danger'}`}
        title={name}
        size={24}
        style={{ cursor: state !== 'occupied'? 'pointer': 'default' }}
      />
    </span>
  )
}