import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function JoinUs() {
  return (
    <div className="joinUsForm">
        <h5>Welcome! Join Us Below!</h5>
    <Form method='post' >
        <div className='studentNames'> 
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control size="sm" 
        type='name'
        placeholder="First Name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Middle Name</Form.Label>
        <Form.Control size="sm" type='name' placeholder="Middle Name" />
      </Form.Group>
      <Form.Group className="mb-3" type='name'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control size="sm" placeholder="Last Name"/>
      </Form.Group> 
      </div>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control size="sm" type="tel" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control size="sm" type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Current Address</Form.Label>
        <Form.Control size="sm" type="address" placeholder="Current Address" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>What's your current level?</Form.Label>
        <Form.Select size="sm" aria-label="Default select example">
      <option value="1st Year">1st Year"</option>
      <option value="2nd Year">2nd Year"</option>
      <option value="3rd Year">3rd Year"</option>
      <option value="4th Year">4th Year"</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>And your course?</Form.Label>
        <Form.Select size="sm" aria-label="Default select example">
      <option>Click to select your course</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      </Form.Group>
      <Button variant="dark" type="submit">
        Let's Go
      </Button>
    </Form></div>
  );
}

export default JoinUs;