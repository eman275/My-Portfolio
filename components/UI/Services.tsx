import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <SectionSubtitle subtitle="What I do" />
        <h3 className="mb-0 mt-4">Better Design,</h3>
        <h3 className="mb-4">Better Experience</h3>

        <Row>
          <Col lg="12" md="12">
            <div className={`${classes.services__container}`}>
              <ServicesItem title="UI Development" icon="ri-apps-line" />
              <ServicesItem title="IP Development" icon="ri-computer-line" />
              <ServicesItem title="Web Development" icon="ri-code-s-slash-line" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" className={`${classes.service__title}`}>
            <Container>
              <ul>
                <li>
                  <p>Responsive Web Applications: I develop responsive and user-friendly web applications using React.js and Next.js, ensuring optimal performance and engaging user experiences.</p>
                </li>
                <li>
                  <p>Custom Component Development: I create reusable and modular components in React.js, improving development efficiency and code maintenance.</p>
                </li>
                <li>
                  <p>TypeScript Integration: I leverage TypeScript's static typing to enhance code reliability and facilitate collaboration within teams.</p>
                </li>
                <li>
                  <p>Server-side Rendering (SSR): I implement server-side rendering with Next.js for improved initial load times and SEO performance.</p>
                </li>
                <li>
                  <p>Front-end Optimization: I optimize web applications using techniques like code splitting, lazy loading, and caching for fast page load times and smooth interactions.</p>
                </li>
                <li>
                  <p>Collaborative Development: I excel in collaborative environments, working closely with designers, back-end developers, and stakeholders for seamless integrations.</p>
                </li>
                <li>
                  <p>Continuous Learning: I stay updated with the latest front-end technologies to leverage efficient tools and techniques for cutting-edge solutions.</p>
                </li>
              </ul>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
