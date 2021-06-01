import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/VenushiDe.pdf";
import { AiOutlineDownload , AiFillSafetyCertificate} from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Certificates</h3>
            <Button variant="primary" href={"https://drive.google.com/drive/u/1/folders/1PrnxS9bHI0neM-9hqPmFIzdj1Lj3L5BX"} target="_blank">
            
            &nbsp;See Certificates
          </Button>
          <br/>
          <br/>
            
            <Resumecontent
              title="Hybrid Mobile Application Development with Flutter"
              
              date="Dec 2021 - Feb 2021"
              content={[
                "University Of Colombo School of Computing"
                
                
              ]}
            />
            
            <Resumecontent
              title="Professional Certificate in
              Marketing (PCM)"
              date="Oct 2020 - Dec 2020"
              content={["Sri Lanka Institute of Marketing (SLIM)"]}
            />
            <Resumecontent
              title="'Py-Hack' - Online Hackathon"
              date="23rd of Jan 2021"
              content={["organized by the IEEE WIE Affinity Group of IIT"]}
            />
            <Resumecontent
              title="Android App Development"
              date="Jan 2021"
              content={["Udemy"]}
            />
            <Resumecontent
              title="Java Script and CSS"
              date="Jan 2021"
              content={["Udemy"]}
            />
            <Resumecontent
              title="Python for Data Science"
              date="May 2021"
              content={["Udemy"]}
            />
            <Resumecontent
              title="Node,js/Express.js/MongoDB/API"
              date="May 2021"
              content={["Udemy"]}
            />
            
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Informatics Institute of
              Technology which is affiliated with the University Of
              Westminster , UK "
              date="2020 - Present"
              content={["Bachelor of Engineering : Software Engineering"]}
            />
            <Resumecontent
              title="Dharmasoka college , Ambalangoda"
              date="2003 - 2017"
              content={["GCE Advanced Level - 2019(Biology Stream) : 1B ,1C ,1S","GCE Ordinary Level - 2014 :8A , 1B "]}
            />
            
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title=""
              content={[
                "Campus Ambassador : International Model United Nations (UN) Association",
                "Member of IEEE Student Branch",
                "Member of AIESEC Student Branch",
                "Member of under 16 School Net ball team",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
