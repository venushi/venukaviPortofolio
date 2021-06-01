import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { ImHeart } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Venushi De Silva . </span>
            I am a <span className="purple">Software Engineering </span>Undergraduate.
            
            
          </p>
          <ul>
            {/* <li className="about-activity">
              <ImHeart /> I’m currently working on becoming full stack devoloper
            </li> */}
            <li className="about-activity">
              <ImHeart /> I'm seeking an internship opportunity to work in a fun and challenging environment
            </li>
            
            <li className="about-activity">
              <ImHeart /> I’m currently learning diffrent language,frame works and UI/UX designing
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
