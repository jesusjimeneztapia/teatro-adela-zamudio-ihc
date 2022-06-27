import { Form } from 'react-bootstrap'

function DayCustom({ day, dayNumber, onClick, checked }) {
  return (
    <p 
      className={`d-flex flex-column align-items-center p-2 rounded ${checked? 'bg-secondary text-light': 'bg-light'}`}
      style={{ minWidth: '54px' }}
      role='button'
      onClick={onClick}
    >
      <span>{day}</span>
      <span>{dayNumber}</span>
    </p>
  )
}

export default function DayButton({ day, dayNumber, checked, onClick }) {
  return (
    <Form.Check as={DayCustom} day={day} dayNumber={dayNumber} onClick={onClick} checked={checked} />
  )
}
