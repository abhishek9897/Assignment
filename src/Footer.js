import React from 'react'
import "./footer.css"
import { Row, Col, Form, Container } from "react-bootstrap"
const Footer = () => {
  return (
    <div className="footer">

      <div className='mx-lg-5 w-100'>

        <Row className='h-100 pt-5 m-auto main'>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='h-50 d-flex align-items-center'>
            <div className='newsLetterHeading'>

              <h2>Newsletter</h2>
              <p>Get news about articles and updates in your inbox</p>
            </div>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='h-75 d-flex align-items-center'>
            <Form className='w-75'>

              <Form.Group>
                <Form.Label>Name</Form.Label>
                <hr></hr>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <hr></hr>
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <hr></hr>
              </Form.Group>
            </Form>

          </Col>
        </Row>
        <Row className='m-auto' >
          <Col>
            <h1 className='GetInTouch'>GET<br></br> IN TOUCH</h1>

          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer