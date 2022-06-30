import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Devanshu Bilthare </span>
            from <span className="purple"> Bhopal, India.</span>
            <br />I have completed my bachelors in Computer Science for LNCT, BHopal
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bike Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Binge watching web series
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Devanshu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
