import { Button, Form } from 'react-bootstrap'
import { useAuthForm } from './providers'

export default function AuthForm() {
  const { isLogin, toggleIsLogin, handleSubmit, email, password, handleChange } = useAuthForm()

  return (
    <Form className='d-flex flex-column gap-2' onSubmit={handleSubmit}>
      <h4>O con tu correo electrónico</h4>
      <Form.Control
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        placeholder='Correo electrónico'
        required
      />
      <Form.Group>
        <Form.Control
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='Contraseña'
          required
        />
        <small className='d-block text-end'>
          {isLogin? '¿No tienes una cuenta? ': '¿Ya tienes una cuenta? '}
          <span 
            className='text-decoration-underline text-primary'
            style={{ cursor: 'pointer' }}
            onClick={toggleIsLogin}>
            {isLogin? 'Regístrate': 'Inicia Sesión'}
          </span>
        </small>
      </Form.Group>
      <Button className='mt-3' type='submit' variant='success'>
        {isLogin? 'Iniciar Sesión': 'Registrarse'}
      </Button>
    </Form>
  )
}
