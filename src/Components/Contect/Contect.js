import React from 'react'
import './Contect.css'
import img1 from './developer-working-on-an-interactive-smartphone-ui-4468733-3728646.png'
import img2 from './ux-ui-design-9325214-7629690.png'
import img3 from './pngtree-modern-flat-design-concept-of-ui-ux-design-with-characters-and-png-image_2157891.jpg'

function Contect() {
  return (
    <div className='holl'>
      
    <div className='first'>
         <img src={img1} alt='img'  />
         <p>UI UX user experience and user interface of a product or service</p>
    </div>

    <div className='sec'>
         <img src={img2} alt='img' />
         <p>Web development is the work involved in developing a website</p>
    </div>

    <div className='third'>
          <img src={img3} alt='img' />
          <p>A web application is  software that is accessed using a web browser</p>
    </div>

    <div className='text'>
      <h1>My Portfolic</h1>
      <p>i take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect.i am excited to bring my skills and experience
        to help businesses achieve their goals and create a strong online presence
      </p>
    </div>
    
    </div>
    
  )
}

export default Contect