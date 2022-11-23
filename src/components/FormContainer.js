import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

<<<<<<< HEAD
const FormContainer = ({children}) => {
  return (
    <div>
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    </div>
=======
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
>>>>>>> b609070874900934ecdb8c7af5c3c611a4d59235
  )
}

export default FormContainer
