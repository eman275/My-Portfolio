import React from "react";
import Image from "next/image";
import classes from "../../styles/testimonial.module.css";
import { Experience } from "../data/data";



const ExperienceItem = (props: Experience) => {
  const { position, companyName, src, description } = props;
  return (
    <div className={`${classes.testimonial__item}`}>
      <div className={`${classes.testimonial__client}`}>
        <Image
          alt="client-img" 
          src={src}
          width="50"
          height="50"
          className=" rounded-2"
        />

        <div>
          <h6>{position}</h6>
          <h6>{companyName}</h6>
        </div>
      </div>

      {/* <p>{description}</p> */}
    </div>
  );
};

export default ExperienceItem;
