import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";


const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="12" md="12">
            <SectionSubtitle subtitle="Contact me" />
          
            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Cairo - Egypt</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>emaaaaw275@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+20 115 266 88 91</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://www.linkedin.com/in/emanaltweel/"  target="_blank">
                <i className={`${classes.link} ri-linkedin-line`}></i>
              </Link>
              <Link href="https://github.com/eman275" target="_blank">
                <i className= {`${classes.link} ri-github-line`}></i>
              </Link>
              <Link href="https://twitter.com/Emaaaww" target="_blank">
                <i className=  {`${classes.link} ri-twitter-line`}></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
