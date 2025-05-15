import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahul Bagda </span>
            from <span className="purple"> Rajkot, India.</span>
            <br />
            <br />
            I am currently a junior <span className="purple">MERN Stack Developer</span> at Imbuesoft LLP.
            <br />
            <br />
            <strong>Professional Highlights:</strong>
            <ul>
              <li>Backend Development: Worked on developing backend services using <span className="purple">Node.js</span> and <span className="purple">Express</span>, focusing on improving scalability and performance.</li>
              <li>Database Management: Managed <span className="purple">MongoDB</span> databases for efficient data storage and retrieval. Optimized query performance.</li>
              <li>Cloud Services: Deployed applications on <span className="purple">AWS</span>, utilizing services like EC2 and S3 for hosting and storage.</li>
              <li>Frontend Development: Developed user-friendly interfaces using <span className="purple">React.js</span>, ensuring responsive design and smooth user experience.</li>
              <li>Version Control: Utilized <span className="purple">Git</span> for version control, collaborating with team members on various projects.</li>
              <li>API Integration: Developed and integrated <span className="purple">RESTful APIs</span> to connect front-end and back-end systems.</li>
            </ul>
            <br />

          </p>
          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Rahul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
