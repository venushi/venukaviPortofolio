import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { ImHeart } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";

function soft() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          
          <ul>
            <li className="about-activity">
              <ImHeart /> I’m currently working on becoming full stack devoloper
            </li>
            <li className="about-activity">
              <ImHeart /> I’m looking to collaborate on any project related to software devolopment
            </li>
            
            <li className="about-activity">
              <ImHeart /> I’m currently learning diffrent languages and frame works to become better software engineer
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default soft;