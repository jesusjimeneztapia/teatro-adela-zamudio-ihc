import { Dropdown } from 'react-bootstrap'
import { BiTime } from 'react-icons/bi'
import { GiCandlebright } from 'react-icons/gi'
import { FiSearch } from 'react-icons/fi'
import { useEvents } from './providers'
import { useAuth } from '../../contexts/providers/AuthProvider'

function Item({ icon, name, identation = false, onClick }) {
  return (
    <Dropdown.Item className={`d-flex align-items-center gap-1 ${identation? 'px-4': 'px-3'}`} onClick={onClick}>
      {icon}
      {name}
    </Dropdown.Item>
  )
}

export default function AutoComplete({ show, onHidden }) {
  const { recentSearches } = useAuth()
  const { autocompleteSearches, search, searchEvent, suggestedSearches } = useEvents()

  const handleClick = ({ id, title, gender }) => () => {
    searchEvent({ gender, id, title })
    onHidden()
  }

  if (!show) {
    return <></>
  }

  return (
    <div className='position-absolute w-100 border top-100 bg-white mt-2 rounded py-3' style={{zIndex: 100}}>
      {
        autocompleteSearches.length > 0 ? (
          <>
            {
              autocompleteSearches.map(({ id, title, gender }) => (
                <Item key={id} icon={<FiSearch />} name={title} onClick={handleClick({gender, id, title})} />
              ))
            }
          </>
        ): (
          <p className='text-muted mx-3'>
            {
              search !== ''? `No existe el evento '${search}'`: 'Escribe el título del evento a buscar'
            }
          </p>
        )
      }
      {
        recentSearches.length > 0 && (
          <>
            <h6 className='mx-3 my-2'>Búsquedas recientes</h6>
            {
              recentSearches.map(({ id, title, gender }) => (
                <Item
                  key={id}
                  icon={<BiTime />}
                  name={title}
                  onClick={handleClick({gender, id, title})}
                  identation
                />
              ))
            }
          </>
        )
      }
      {
        suggestedSearches.length > 0 && (
          <>
            <h6 className='mx-3 my-2'>Búsquedas sugeridas</h6>
            {
              suggestedSearches.map(({ id, title, gender }) => (
                <Item
                  key={id}
                  icon={<GiCandlebright className='text-danger' />}
                  name={title} onClick={handleClick({gender, id, title})}
                  identation
                />
              ))
            }
          </>    
        )
      }
    </div>
  )
}
