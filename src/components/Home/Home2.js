import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mineCircle.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMedium,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I consider myself as a highly motivated and hard
working individual with a positive mindset and fast
learning skills.I am adept at handling multiple tasks on a daily basis competently and at working well under pressure. 
             
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple">Mobile Application Development </b> and
                also in areas related to{" "}
                <b className="purple">
                  Design
                </b>
              </i>
              <br />
              <br />
              I also apply my passion for developing products
              with
              <i>
                <b className="purple"> Modern Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js , React.js , Spring boot</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
           
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
    </Container>
    
  );
}
export default Home2;
