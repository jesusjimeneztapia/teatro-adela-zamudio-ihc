import { Card } from 'react-bootstrap'

export default function EventCard({ imageURL, title, presentedBy, onClick }) {
  return (
    <Card className='h-100 bg-light shadow-sm' style={{cursor: 'pointer'}} onClick={onClick}>
      <Card.Img height={214} variant='top' src={imageURL} alt={title} style={{ objectFit: 'cover', objectPosition: 'top' }} />
      <Card.Footer className='bg-light'>
        <h6>{title}</h6>
        {presentedBy}
      </Card.Footer>
    </Card>
  )
}
