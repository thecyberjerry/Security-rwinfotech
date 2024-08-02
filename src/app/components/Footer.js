import React from "react";
import Footercta from "./minicomponents/Footercta";
import Logo from "./minicomponents/Logo";
import Link from "next/link";

export default function Footer({ logo, footerdata }) {
  return (
    <footer>
      {footerdata && footerdata?.footercta && (
        <div className="container footer__cta">
          <Footercta footerCta={footerdata?.footercta} />
        </div>
      )}
      <div className="container-fluid footer">
        <div className="container footer__wrapper">
          <div className="footer__content">
            <div className="footer__logo">
              {logo && <Logo logodata={logo} />}
              <p>{footerdata?.desc && footerdata?.desc}</p>
            </div>
            <div className="footer__list">
              {footerdata?.lists &&
                footerdata?.lists.map((item, index) => {
                  return (
                    <div key={index} className="footer__listcontent">
                      <label htmlFor="list">{item.title}</label>
                      <ul>
                        {item?.list &&
                          item?.list?.map((item, index) => {
                            return (
                              <Link href={item.url} key={index}>
                                <li>{item.title}</li>
                              </Link>
                            );
                          })}
                      </ul>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
