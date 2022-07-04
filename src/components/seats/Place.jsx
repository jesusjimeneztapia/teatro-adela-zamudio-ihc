import { MdEventSeat } from 'react-icons/md'
import { useAuth } from '../../contexts/providers/AuthProvider'

export default function Place({ name, state, userName, date, onClick }) {
  const { displayName } = useAuth()

  const showState = () => {
    return state === 'bought'? 'Comprado': 'Reservado'
  }

  const showDate = () => {
    return new Date(date).toLocaleDateString('es-ES', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
  }

  return (
    <span className='pb-1' onClick={onClick}>
      <MdEventSeat
        className={`${
          state === 'available'?
            'text-secondary': state === 'bought'?
              displayName === userName?
                'text-info':
              'text-black':
            displayName === userName?
              'text-danger':
            'text-warning'
          }`
        }
        title={ 
          userName === displayName? `${name} ${showState()} por ti el ${showDate()}`
          : !userName? name: `${name} ${showState()} por ${userName} el ${showDate()}`
        }
        size={24}
        style={{
          cursor: state !== 'bought' && !!displayName? 
            (state === 'reserved' && displayName === userName) || state === 'available'? 
              'pointer': 
            'default': 
          'default' 
        }}
      />
    </span>
  )
}