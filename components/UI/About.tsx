import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              Hi, I'm Eman Mohsen Mostafa, a front-end developer with expertise in
              React.js, Next.js, and TypeScript. I am passionate about crafting
              engaging web applications and delivering exceptional user
              experiences. With a strong foundation in HTML, CSS, and
              JavaScript, I leverage the power of React.js and Next.js to build
              dynamic and scalable web applications. TypeScript enhances my
              development process by providing static typing and improved code
              navigation. I have successfully delivered projects of various
              scales, collaborating with designers and back-end developers to
              create seamless integrations. I stay up-to-date with the latest
              advancements in the React.js and Next.js ecosystems to ensure I
              leverage the most efficient tools and techniques.
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>

            <div className="mt-5">
              {/* <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button> */}

            </div>
          </Col>

        
        </Row>
      </Container>
    </section>
  );
};

export default About;
