export default function Hour({ hour, onClick }) {
  return (
    <button 
      className='border-0 py-2 px-3 rounded'
      onClick={onClick}
      style={{ minWidth: '70px' }}
    >
      {hour}
    </button>
  )
}
