import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/task.png";

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
              title="Task Asssigner Web app"
              description="A web application that allows users to create and assign tasks to team members, enhancing productivity and collaboration."
              ghLink="https://github.com/rahulbagda12/Task-Management-MERN"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
