import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'
import img1 from './human.avif'
import './Home.css'
import About from '../About/About'
import Contect from '../Contect/Contect'
import Imgg from './Imgg'
import Sivv from './Sivv'

function Home() {
  return (
    <div>
    <Container>
      <Row>
        <Col md={7} className='home-1'>
        <p className='home-2' >Hello I'm</p>
        <h2 className='home-3'>Siva T</h2>
        <p className='home-4'>React web developer with a passion for coding and problem-solving</p>
        </Col>
        <Col md={5} >
     <img src={img1} alt='human' />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
        <About />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Contect />
        </Col>
      </Row>

      <Imgg/>
   
      
      <Sivv />
      
    </Container>
    </div>
  )
}

export default Home
