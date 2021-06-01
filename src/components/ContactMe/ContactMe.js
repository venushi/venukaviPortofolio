import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMedium,
} from "react-icons/ai";
import { FaLinkedinIn,FaRegSmileBeam } from "react-icons/fa";

import Particle from "../Particle";

function ContactMe() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            CONTACT <strong className="purple">ME </strong>
          </h1>
          <p style={{ color: "white" }}>
          Whether you want to get in touch,  talk about a project collaboration, 
           or just say hi,  I'd love to hear from you.<FaRegSmileBeam/>
          </p>
          </Container>
          <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
          <Row>
              
              <Container>
          
          <h3 style={{ color: "white" }}>
          +94 070 32 04 383
          </h3>
          <h6 style={{ color: "white" }}>
          venushikavitha06@gmail.com
          </h6>
          </Container>
            
          
        </Row><Row>
          <Col md={12} className="home-about-social">
            
           
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/venushi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://venushidesilva22.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMedium />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/venushidesilva123/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_venuuuu_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
          </Container>
    );

}
export default ContactMe;