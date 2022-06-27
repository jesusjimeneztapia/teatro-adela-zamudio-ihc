import Page from '../components/Page'
import { Col, Image, ListGroup, Row } from 'react-bootstrap'
import Information from '../components/event/Information'
import Schedule from '../components/event/Schedule'

export default function EventPage() {
  return (
    <Page>
      <h1>La Imilla precoz y el lobo feroz</h1>
      <Row>
        <Col md={12} lg={6} xl={7}>
          <Image 
            src='https://www.cronicaviva.com.pe/wp-content/uploads/2015/08/El-cumplea%C3%B1os-del-lobo-feroz.jpg'
            alt='La Imilla precoz y el lobo feroz'
            fluid
            thumbnail
          />
        </Col>
        <Col md={12} lg={6} xl={5}>
          <ListGroup variant='flush'>
            <Information 
              title='descripción'
              detail='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, eveniet aliquid atque ullam maiores magni nesciunt, cum officia, tempore quidem ipsa. Quis eos amet quas hic iusto modi accusamus. Mollitia.'
            />
            <Information title='género' detail='Dramático' />
            <Information title='duración' detail='90 min.' />
            <Information title='estreno' detail='11 de enero de 2022' />
            <Information title='presentado por' detail='David Santalla' />
          </ListGroup>
        </Col>
      </Row>
      <Schedule />
    </Page>
  )
}
