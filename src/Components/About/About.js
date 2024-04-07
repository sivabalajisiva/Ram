import React from 'react'
import './About.css'
import {Container , Row , Col} from 'react-bootstrap' 
function About() {
  return (
    <Container>
      <Row>
        <Col md={12}>
    <div className='About-1'>
      <h1 className='display-1, fw-bold text-decoration-underline'>About</h1>
      <p>I'm a react web developer with a passion for coding and proplem-solving<br/>
         always looking for way to improve my development skills
      </p>
      <h1 className='display-1, fw-bold text-decoration-underline mt-5'>Technical skills</h1>
      <p>Html,Css,Javascript,Bootstrap<br/>Es6,React,ReactRouterDom</p>
    </div></Col> 
    </Row>
    </Container>
  )
}

export default About
