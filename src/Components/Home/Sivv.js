import Form from 'react-bootstrap/Form';
import './Sivv.css'
function Sivv() {
  return (
    <div className='sivv'>
      <Form.Label htmlFor="inputPassword5">Enter your name</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
      
      </Form.Text>
      <Form.Label htmlFor="inputPassword5">Enter your Email</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
       
      </Form.Text>

      <Form.Text id="passwordHelpBlock" muted>
      
      </Form.Text>
      <Form.Label htmlFor="inputPassword5">enter your numper</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
       
      </Form.Text>

      <p className='bottom'>please fill out the form below to discuss any work opportunities</p>
    </div>
  );
}

export default Sivv;