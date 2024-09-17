import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import '../styles/Profile.css'
import { IoLogoGithub} from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Profile = () => {

    return(
        <Container fluid>
          <Row className="banner justify-content-center white-text">
            <Col md={6} className="text-center">
              <Image src="img.jfif" roundedCircle className= "mb-3 profile-img"/>
              <h2>Erick Developer</h2>
              <p>Full Stack Developer</p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Sobre Mim
                  </Card.Title>
                  <Card.Text>
                    Depois escrevem qualquer coisa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis natus tempore nostrum ullam, expedita, quisquam possimus quo officiis esse eius molestias alias impedit minus temporibus aliquid exercitationem vero voluptatum? Molestiae.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Skills
                  </Card.Title>
                  <ul>
                    <li>HTML,CSS,Bootstrap</li>
                    <li>JavaScript,React,Node.js</li>
                    <li>Python,Django</li>
                    <li>SQL,MongoDB</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col md={8} className="text-center">
              <Button variant="dark" href="https://github.com" className="m-2"> 
              <IoLogoGithub/> GitHub
              </Button>
              <Button variant="dark" href="https://LinkedIn.com" className="m-2"> 
              <FaLinkedin /> LinkedIn
              </Button>
              <Button variant="dark" href="https://facebook.com" className="m-2"> 
              <FaFacebookSquare /> Facebook
              </Button>
            </Col>
          </Row>
        </Container>
    )
}

export default Profile;