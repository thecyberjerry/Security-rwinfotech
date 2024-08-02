import React from "react";
import Image from "next/image";
export default function Articlescard({ cardData }) {
  return (
    <div
      className="article"
      style={{
        backgroundImage: `url(${cardData?.bgImg?.src})`,
      }}
    >
      {cardData && (
        <div className="article__innertext">
          <div className="article__upperSection">
            <div className="article__readmore">
              <p>{cardData?.btn.title && cardData?.btn.title}</p>
            </div>
            <div className="article__date">
              <Image
                src={cardData?.calIcon?.src}
                height={100}
                width={100}
                alt={cardData?.calIcon?.alt}
              />
              <p>{cardData?.date && cardData?.date}</p>
            </div>
          </div>
          <div className="article__lowerSection">
            <p>{cardData?.desc && cardData?.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
