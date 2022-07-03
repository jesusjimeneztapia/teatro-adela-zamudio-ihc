import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'
import { useSeats } from './providers'

export default function PayModal({ show, onHide }) {
  const { selected } = useSeats()
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement)
    })

    if (!error) {
      alert('El pago fue exitoso')
    }
  }

  return (
    <Modal show={show} onHide={onHide} backdrop='static' keyboard={false} >
      <Modal.Header closeButton>
        <Modal.Title>Pagar las butacas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Detalles de compra</h5>
        <p className='d-flex flex-column'>
          <span><strong>Entradas:</strong> {selected.length}</span>
          <span><strong>Precio de entrada:</strong> Bs42</span>
          <span><strong>Monto total a pagar:</strong> Bs{selected.length * 42}</span>
        </p>
        <h5>Información del pago</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='number'>Número de tarjeta</Form.Label>
            <CardNumberElement className='form-control' id='number' />
          </Form.Group>
          <Row className='mb-3'>
            <Col>
              <Form.Group>
                <Form.Label htmlFor='expiry'>Expiración</Form.Label>
                <CardExpiryElement className='form-control' id='expiry' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label htmlFor='cvc'>CVC</Form.Label>
                <CardCvcElement className='form-control' id='cvc' />
              </Form.Group>
            </Col>
          </Row>
          <Button className='w-100 text-uppercase' type='submit' variant='success'>Comprar</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
