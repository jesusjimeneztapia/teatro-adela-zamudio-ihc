import { ListGroup } from 'react-bootstrap'

export default function Information({ title, detail }) {
  return (
    <ListGroup.Item className='px-0'>
      <strong className='text-uppercase'>{title}: </strong>
      <p className='d-inline'>{detail}</p>
    </ListGroup.Item>
  )
}
