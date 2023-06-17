import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function JoinUs() {


  return (
    <div className="joinUsForm">
      <h5>Welcome! Join Us Below!</h5>
      <Form method="post">
        <div className="studentNames">
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
            required
              size="sm"
              type="name"
              placeholder="First Name"
              name="firstname"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control required
              size="sm"
              type="name"
              placeholder="Middle Name"
              name="middlename"
            />
          </Form.Group>
          <Form.Group className="mb-3" type="name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control  required size="sm" placeholder="Last Name" name="lastname" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control required
            size="sm"
            type="tel"
            placeholder="Phone Number"
            name="phone"
            pattern="\d{10}"
            title="Please enter a 10-digit number"
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required
            size="sm"
            type="email"
            placeholder="Email"
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Current Address</Form.Label>
          <Form.Control required
            size="sm"
            type="address"
            placeholder="Current Address"
            name="address"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>What's your current level?</Form.Label>
          <Form.Select required
            size="sm"
            aria-label="Default select example"
            name="year"
          >
            <option value="1st Year">1st Year"</option>
            <option value="2nd Year">2nd Year"</option>
            <option value="3rd Year">3rd Year"</option>
            <option value="4th Year">4th Year"</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>And your course?</Form.Label>
          <Form.Select required
            size="sm"
            aria-label="Default select example"
            name="program"
          >
            <option value="Business Administration">Bachelor of Business Administration</option>
        <option value="Information Systems">Bachelor of Science in Computer Information Systems</option>
        <option value="Nursing">Bachelor of Science in Nursing</option>
        <option value="Community Health">Bachelor of Science in Community Health</option>
        <option value="Pharmacy">Bachelor of Pharmacy</option>
        <option value="International Relations">Bachelor of International Relations</option>
        <option value="Msc Information Systems">Master of Science in Computer Information Systems</option>
        <option value="Master of Business Administration">Master of Business Administration</option>
        <option value="MSc Finance and Investment"> Master of Science in Finance and Investment</option>
        <option value="PhD Business Administration and Management">Doctor of Philosophy in Business Administration and Management</option>
        <option value="PhD Health Systems Management">Doctor of Philosophy in Health Systems Management</option>
        <option value="Bachelor of Medicine">Bachelor of Medicine & Bachelor of Surgery (MB.ChB)</option>
          </Form.Select>
        </Form.Group>
        <Button variant="dark" type="submit">
          Let's Go
        </Button>
      </Form>
    </div>
  );
}

export default JoinUs;
