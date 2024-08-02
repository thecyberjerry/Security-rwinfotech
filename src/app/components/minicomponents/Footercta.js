import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import Image from "next/image";

export default function Footercta({ footerCta }) {
  return (
    <div className="">
      {footerCta?.img && (
        <div className="footercta__img">
          <Image
            src={footerCta?.img?.src}
            height={100}
            width={100}
            alt={footerCta?.img?.alt}
          />
        </div>
      )}
      <div className="footercta">
        <div className="footercta__lower">
          <div className="footercta__wrapper">
            <div className="footercta__textcontent">
              {footerCta?.heading && (
                <Heading
                  whiteColor={
                    footerCta?.heading?.whitecolor &&
                    footerCta?.heading?.whitecolor
                  }
                  title={footerCta?.heading?.title}
                />
              )}
            </div>
            <div className="footercta__btn">
              <Button
                btn={footerCta?.btn}
                blackBackground={footerCta?.btn?.blackBackground}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
