import { Form } from 'react-bootstrap'

function GenderFilterCustom({ gender, checked, onClick }) {
  return (
    <p
      className={`px-3 py-1 rounded-pill border ${checked? 'bg-primary border-primary text-light': 'bg-light'}`}
      style={{cursor: 'pointer'}}
      onClick={onClick}
    >
      {gender}
    </p>
  )
}

export default function GenderFilter({ gender, checked, onClick }) {
  return (
    <Form.Check as={GenderFilterCustom} gender={gender} checked={checked} onClick={onClick} />
  )
}
