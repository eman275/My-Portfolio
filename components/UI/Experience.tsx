import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";
import ExperienceItem from "./ExperienceItem";
import { companies } from "../data/data";

const Experience = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const companiesList = companies.map((item, index) => {
    return (
      <ExperienceItem
        src={item.src}
        position={item.position}
        companyName={item.companyName}
        description={item.description}
      />
    );
  });
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Professional Experience" />
            {/* <h4 className="mt-4 mb-5">  Professional Experience </h4> */}

            <Slider {...settings}>

              {companiesList}
              {/* 
              {companies.map(item , index) => (
                <ExperienceItem/>
              )} */}
              {/* <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Jhon Doe</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p>
              </div> */}

              {/* <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Henry Nichols</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p>
              </div> */}

              {/* <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Adam Smith</h6>
                    <h6>Financial Accountant</h6>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p>
              </div> */}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
