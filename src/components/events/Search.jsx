import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import AutoComplete from './AutoComplete'
import { useEvents } from './providers'

export default function Search() {
  const { isLoading, setSearch, search, resetSearch } = useEvents()
  const [show, setShow] = useState(false)
  
  const onShow = () => {
    setShow(true)
  }
  
  const onHidden = () => {
    setShow(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    resetSearch()
    onHidden()
  }

  if (isLoading) {
    return <></>
  }

  return (
    <Row>
      <Col xs={12} md={{offset: 2, span: 8}} lg={{offset: 3, span: 6}} xl={{offset: 4, span: 4}}>
        <Form className='position-relative mb-3' onSubmit={handleSubmit}>
          <Form.Control
            name='search'
            placeholder='Buscar por título de evento...'
            onFocus={onShow}
            autoComplete='off'
            onChange={setSearch}
            value={search}
          />
          <button
            className='position-absolute top-50 end-0 translate-middle border-0 p-0 bg-transparent'
            type='submit'
          >
            <AiOutlineClose size={20} />
          </button>
          <AutoComplete show={show} onHidden={onHidden} />
        </Form>
      </Col>
    </Row>
  )
}
