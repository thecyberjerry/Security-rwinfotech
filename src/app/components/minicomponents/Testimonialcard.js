import React from "react";
import Image from "next/image";
export default function Testimonialcard({ cardData }) {
  return (
    <div className="testimonial">
      {cardData && (
        <div className="testimonial__wrapper">
          <div className="testimonial__card">
            {cardData?.icon && cardData?.icon?.src && (
              <div className="testimonial__icon">
                <Image
                  src={cardData?.icon?.src}
                  height={100}
                  width={100}
                  alt={cardData?.icon?.alt}
                />
              </div>
            )}
            <div className="testimonial__text">
              <p>{cardData?.desc && cardData?.desc}</p>
            </div>
            <div className="testimonial__user">
              {cardData?.userPic && cardData?.userPic?.src && (
                <Image
                  src={cardData?.userPic?.src}
                  height={100}
                  width={100}
                  alt={cardData?.userPic?.alt}
                />
              )}
              <h5>{cardData?.userName && cardData?.userName}</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
