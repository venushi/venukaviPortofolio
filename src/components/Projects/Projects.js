import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";

import leaf from "../../Assets/Projects/stockx.jpeg";
import emotion from "../../Assets/Projects/football.png";
import editor from "../../Assets/Projects/movie.jpeg";
import chatify from "../../Assets/Projects/flutter.jpeg";
import suicide from "../../Assets/Projects/tourism.jpg";
import algo from "../../Assets/Projects/oop.jpg";
import plant from "../../Assets/Projects/plant.jpeg";
import pdf from "../../Assets/VenushiDe.pdf";
import { AiOutlineDownload , AiFillGithub} from "react-icons/ai";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="QuizMaker (Individual)"
              description="A mobile application,user can create questions and play a quiz game.
              Used Flutter and Firebase"
              link="https://github.com/venushi/quizMaker-Flutter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="StockX (Group)"
              description="A web application to Identify products that are
              about to expire before they expire and calculate the
              remaining stock and predict number of reorders(Java, Python,ReactJS, AWS, Spring boot,
              Machine Learning).
              Completed the front end and
              Contribute with back end"
              link="https://github.com/hilal953/SDPG-Stock"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Movie Mobile App (Individual)"
              description="Native android application to register,edit,lookup
              movies user has watched and find IMDb ratings
              using IMDb APIs"
              link="https://github.com/venushi/Movie-Mobile-app-android-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Tourism Web site (Group)"
              description="A web site based on best tourist places on Sri Lanka
              Used HTML, CSS, JavaScript .
              Acted as team leader
              ."
              link="https://github.com/venushi/Tourism-web-site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Premiere League Manager application (Individual)"
              description="Based on Java and OOP.
              Used Java,JavaFX"
              link="https://github.com/venushi/PremierLeagueManager"
            />
          </Col>
          
        </Row>
             <h4
               
                style={{ color: "white" }}>
              
              <AiFillGithub />View more projects on my Git Hub
              </h4>
          <br/>
          <br/>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link="https://venushidesilva22.medium.com/"
              title="Principles of OOP"
              site="medium.com"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
