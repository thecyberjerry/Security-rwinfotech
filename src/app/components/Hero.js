import React from "react";
import Navbar from "./Navbar";
import Heroheading from "./minicomponents/Heroheading";
import Button from "./minicomponents/Button";

export default function Hero({ navData, herodata, logo }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${
          herodata?.bgImg ? herodata?.bgImg : "/assets/hero/hero.svg"
        })`,
      }}
    >
      <div className="container">
        {navData && (
          <div className="hero__navbar">
            <Navbar navData={navData} logo={logo} />
          </div>
        )}
        <div
          className={`${
            herodata?.desc && herodata?.btn ? "" : "hero__flex"
          } hero__content`}
        >
          {herodata && (
            <div className="hero__text hero__text--red">
              <>
                {herodata?.content && (
                  <Heroheading
                    content={{
                      first: herodata?.content?.first,
                      second: herodata?.content?.second,
                    }}
                    reverse={herodata?.reverse}
                  />
                )}
                {herodata?.desc && <p>{herodata?.desc}</p>}
                <div className="hero__text__btn">
                  {herodata?.btn && <Button btn={herodata?.btn} />}
                </div>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
