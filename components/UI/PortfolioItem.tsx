import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItemProps {
  item: {
    title: string;
    img: string;
    liveUrl: string;
    keyword: string[];
  };
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  const { title, img, liveUrl, keyword } = item;

  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width={380} height={250} />
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={liveUrl}>Launch</Link>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
