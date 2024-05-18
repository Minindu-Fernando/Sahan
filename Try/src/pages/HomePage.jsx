import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import image from '../assets/image1.png'

export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <Container style={{backgroundColor:'black'}}>
            <Row>
                <Col>
                <h1>Hello</h1>
                    <img src={image} alt="" />
                </Col>

                <Col>
                <h1>Hello</h1>
                </Col>
            </Row >
            <Row>
                <Col>
                <h1>Hello</h1>
                </Col>

                <Col>
                <h1>Hello</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
