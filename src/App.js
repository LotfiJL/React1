import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Card,
  Button,
  Alert,
} from "react-bootstrap";

function BasicExample() {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Checkpoint</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {["primary"].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      <div className="aligned">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/R.80c5007eb1c89d61a8ea9fd04ab11503?rik=q3EY%2f1ETY%2bg3XQ&riu=http%3a%2f%2fcode-fin-nua.com%2fwp-content%2fuploads%2f2020%2f06%2freact_logo_1200x640.png&ehk=tEDDKXPbWmJipWAdcwmKUGAkGAAcZN7plRqj70HXha4%3d&risl=&pid=ImgRaw&r=0"
          />
          <Card.Body>
            <Card.Title>React</Card.Title>
            <Card.Text>
              React is a JavaScript library for building user interfaces.
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.w3schools.com/react/default.asp"
            >
              React Course
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/OIP.rFH85R4BK2GNJ2ANj9NnFAHaEu?rs=1&pid=ImgDetMain"
          />
          <Card.Body>
            <Card.Title>Itashi</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/OIP.e8mONZnOosQ4mwC_PbZSdgHaEE?rs=1&pid=ImgDetMain"
          />
          <Card.Body>
            <Card.Title>JavaScript</Card.Title>
            <Card.Text>
              JavaScript is the world's most popular programming language. .
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.w3schools.com/js/default.asp"
            >
              JS course
            </Button>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default BasicExample;
