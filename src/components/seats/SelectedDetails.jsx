import { useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import PayModal from './PayModal'
import { useSeats } from './providers'

export default function SelectedDetails() {
  const { selected, day, togglePlace } = useSeats()
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(value => !value)
  }

  return (
    <Container>
      <Row>
        <Col className='mt-3' xs={12} lg={{offset: 2, span: 8}} xl={{offset: 3, span: 6}}>
          <div className='d-flex flex-wrap gap-2 justify-content-between'>
            <strong>La Imilla precoz y el lobo feroz</strong>
            <small className='d-block'>{day.name} {day.number}</small>
          </div>
          {
            selected.length > 0? (
              <>
                <Table className='mt-3' hover>
                  <thead>
                    <tr>
                      <th className='text-center'>Número</th>
                      <th className='text-center'>Fila</th>
                      <th className='text-center'>Precio</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      selected.map(({ name }) => (
                        <tr key={name}>
                          <td className='text-center'>{name.slice(0, name.length - 1)}</td>
                          <td className='text-center'>{name.at(-1)}</td>
                          <td className='text-center'>Bs42</td>
                          <td className='text-danger text-center'>
                            <AiFillDelete title={`Eliminar ${name}`} onClick={() => togglePlace(name)} style={{cursor: 'pointer'}} />
                          </td>
                        </tr>
                      ))
                    }
                    <tr>
                      <td></td>
                      <td className='fw-bold text-center'>Total</td>
                      <td className='fw-bold text-center'>Bs{ selected.length * 42 }</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
                <div className='d-flex gap-3'>
                  <Button className='text-uppercase' onClick={() => alert('Reservar butacas')}>Reservar</Button>
                  <Button className='text-uppercase' variant='success' onClick={toggleShow}>Comprar</Button>
                </div>
                <PayModal show={show} onHide={toggleShow} />
              </>
            ): <p className='text-muted text-center mt-3'>Seleccione alguna butaca</p>
          }
        </Col>
      </Row>
    </Container>
  )
}
