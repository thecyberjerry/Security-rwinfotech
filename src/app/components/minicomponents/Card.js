import React from "react";
import Image from "next/image";
export default function Cards({ cardData }) {
  return (
    <div>
      <div className="card">
        {cardData && cardData?.imgSrc && (
          <div className="card__img">
            <Image
              src={cardData?.imgSrc?.src}
              height={100}
              width={100}
              alt={cardData?.imgSrc?.alt}
            />
          </div>
        )}
        <div className="card__textcontent">
          <h4>{cardData?.heading}</h4>
          <p>{cardData?.desc}</p>
        </div>
      </div>
    </div>
  );
}
