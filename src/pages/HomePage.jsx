import { Col, Container, Row } from 'react-bootstrap'
import AuthForm from '../components/home/AuthForm'
import AuthProviders from '../components/home/AuthProviders'
import { AuthFormProvider } from '../components/home/providers'
import Page from '../components/Page'
import { useAuth } from '../contexts/providers/AuthProvider'
import { Navigate } from 'react-router-dom'
import ROUTES from '../routes/helper'

export default function HomePage() {
  const { logged } = useAuth()

  if (logged) {
    return <Navigate to={ROUTES.events()} replace={true} />
  }

  return (
    <Page>
      <Container>
        <Row>
          <Col
            className='d-flex flex-column gap-4'
            xs={12} sm={{ offset: 2, span: 8 }}
            md={{ offset: 3, span: 6 }}
            lg={{ offset: 4, span: 4 }}
          >
            <AuthFormProvider>
              <AuthProviders />
              <AuthForm />
            </AuthFormProvider>
          </Col>
        </Row>
      </Container>
    </Page>
  )
}
