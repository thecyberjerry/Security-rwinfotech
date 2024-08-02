import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Information({ informationData }) {
  return (
    <>
      {informationData &&
        informationData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="">
                <div className="container">
                  <div
                    className={`aboutus ${
                      item?.reverse === true && "aboutus__reverse"
                    }
                    }`}
                  >
                    {item?.displayImg && (
                      <div className="aboutus__img">
                        <Image
                          src={item?.displayImg?.src}
                          height={100}
                          width={100}
                          alt={item?.displayImg?.alt}
                        />
                      </div>
                    )}
                    <div className="aboutus__textcontent">
                      <div className="aboutus__h3">
                        {item?.headingImg && item?.headingImg?.src && (
                          <Image
                            className="aboutus__minilogo"
                            src={item?.headingImg?.src}
                            height={100}
                            width={100}
                            alt={item?.headingImg?.alt}
                          />
                        )}
                        {item?.heading && <h3>{item?.heading}</h3>}
                      </div>
                      &nbsp;
                      {item?.desc && <p>{item?.desc}</p>}
                      {item?.lists && (
                        <ul>
                          {item?.lists?.map((item, index) => {
                            return <li key={index}>{item}</li>;
                          })}
                        </ul>
                      )}
                      {item?.btn && (
                        <div className="aboutus__btn">
                          <Button btn={item?.btn} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
}
