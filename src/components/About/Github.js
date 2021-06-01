import React from "react";
import GitHubCalendar from "react-github-calendar";

import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import { ImHeart,ImFire } from "react-icons/im";

function Github() {
  return (
    <Card className="quote-card-view"> 
      <Card.Body>
        <blockquote className="blockquote mb-0">
          
          <ul style={{ textAlign: "center" }}>
          <li className="about-activity">
              <ImFire /> Fast learner 
            </li>
            <br/>
            <li className="about-activity">
              <ImFire /> Team player

            </li>
            <br/>
            <li className="about-activity">
              <ImFire/> Creative sprit
            </li>
            <br/>
            
            <li className="about-activity">
              <ImFire/> Leadership skills
            </li>
            <br/>
            <li className="about-activity">
              <ImFire /> Time managment 
            </li>
          </ul>

          
        </blockquote>
        <br/>
        <br/>
        <Col>
              <Row><a>Theme by @Somajith</a></Row>

            </Col>
      </Card.Body>
    </Card>
  );
}

export default Github;
