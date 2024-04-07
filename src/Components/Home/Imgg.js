import React from 'react'
import {Container , Row,Col} from 'react-bootstrap'
import './imgg.css'
import img11 from './2007-10-Sites for Web Design Inspiration-h-1.webp'
import img12 from './web-design-technology-browsing-programming-concept_53876-163260.avif'
import img13 from './static-web-design.jpg'
import img14 from './main-qimg-50b6bb19cb3d45ca6fe1d906ca7bd490.webp'
import img15 from './letter-w-modern-technological-logo_575535-180.avif'
import img16 from './IT-Logo-Design1.png'
function Imgg() {
  return (
    <Container>
      <div  className='imgg'>
      <Row>
        <Col md={4} >
        <img src={img11} alt='img' className='imgg11' />
        </Col>
        <Col md={4}>
        <img src={img12} alt='img' className='imgg12' />
        </Col>
        <Col md={4}>
        <img src={img13} alt='img' className='imgg13' />
        </Col>
      </Row> 
       </div>

      <div className='imggg'>
      <Row>
      <Col md={4}>
        <img src={img14} alt='img' className='imgg14' />
        </Col>
        <Col md={4}>
        <img src={img15} alt='img' className='imgg15' />
        </Col>
        <Col md={4}>
        <img src={img13} alt='img' className='imgg13' />
        </Col>
      </Row>
      </div>
      
      <div className='client'>
        <h2>My clients</h2>
        <p>I have had the opportunity to work with a diverse group of companies.
          some of the notable companies i have worked with include
        </p>
      </div>
      <div className='logos'>
        <Row>
          <Col md={12}>
        <img src={img16} alt='img' className='img16' />
          </Col>
        </Row>
      </div>
      <button className='but'>click it</button>
    </Container>
  )
}

export default Imgg
