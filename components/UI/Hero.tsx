import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col, Button } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";
 import cvPDF from "../../public/files/cv.pdf";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPDF; 
    link.target = "_blank"; 
    link.download = "Eman.M.Mostafa(front-end-developer[reactjs && Nextjs]).pdf"; 
    link.click();
  };
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Eman Mohsen Mostafa</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
                Front-end developer Experienced with all stages of the
                development cycle for dynamic web projects. experience in
                blending the art of design with the skill of programming to
                deliver an immersive and engaging user experience through
                efficient website development, proactive feature optimization,
                and relentless debugging.
              </p>
              <div className="mt-5">
                <Button className="secondary__btn" onClick={handleDownloadCV} color="success">
                  Download CV
                </Button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
