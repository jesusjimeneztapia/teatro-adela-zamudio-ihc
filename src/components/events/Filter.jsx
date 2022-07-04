import { Form } from 'react-bootstrap'
import GenderFilter from './GenderFilter'
import { useEvents } from './providers'

const genders = ['Todos', 'Danza', 'Música', 'Teatro']

export default function Filter() {
  const { filterEvents, gender: selectedGender, isLoading, search } = useEvents()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  if (isLoading || search !== '') {
    return <></>
  }

  return (
    <Form className='d-flex gap-3 mb-3' style={{overflowX: 'auto'}} onSubmit={handleSubmit}>
      {
        genders.map((gender, index) => (
          <GenderFilter
          key={index}
          gender={gender}
          checked={selectedGender === gender}
          onClick={() => filterEvents(gender)}
        />))
      }
    </Form>
  )
}
