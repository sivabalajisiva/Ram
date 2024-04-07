import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contect from './Components/Contect/Contect'
import Navb from './Components/Navb/Navb'
import {Routes ,Route} from 'react-router-dom'
import {Container , Row , Col} from 'react-bootstrap'
function App() {
  return (
    <Container ><Row><Col>
    <div>
      <Navb />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Contect' element={<Contect />} />
      </Routes>
    </div></Col></Row></Container>
  )
}

export default App
