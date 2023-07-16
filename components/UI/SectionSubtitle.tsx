import React from "react";
import classes from "../../styles/subtitle.module.css";

interface SectionSubtitleProps {
  subtitle: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = (props) => {
  return <h5 className={`${classes.section__subtitle}`}>{props.subtitle}</h5>;
};

export default SectionSubtitle;
