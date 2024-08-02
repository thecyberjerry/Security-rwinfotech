"use client";
import Image from "next/image";
import React from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { toggleOn } from "../toggle/state";

import Button from "./minicomponents/Button";
import Logo from "./minicomponents/Logo";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import Mininav from "./minicomponents/Mininav";

export default function Navbar({ navData, logo }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const path = usePathname();
  return (
    <div className={path.slice(1) === "errorpage" ? "container" : ""}>
      <nav className={`${navData?.toggle && "nav__toggle"} nav__padding`}>
        <div className="nav">
          {logo && (
            <div className="nav__logo">
              <Logo logodata={logo} />
              <RxHamburgerMenu
                onClick={() => {
                  dispatch(toggleOn());
                }}
                className="nav--open"
              />
              <Mininav
                isOpen={count ? "mininav--isopen" : ""}
                logodata={logo}
                items={navData?.list}
                btn={navData?.navbtn}
              />
            </div>
          )}
          {navData?.list && (
            <div className="nav__list ">
              <ul>
                {navData?.list.map((item, index) => {
                  return (
                    <Link href={item.url} key={index}>
                      <li
                        style={{
                          color:
                            path.slice(1).toLowerCase() ===
                            item.title.toLowerCase()
                              ? "#EF9151"
                              : undefined,
                        }}
                      >
                        {item.title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
          <div className="nav__phone">
            {navData?.phone && (
              <>
                <Image
                  className="img"
                  src={navData?.phone?.icon?.src}
                  height={100}
                  width={100}
                  alt={navData?.phone?.icon?.alt}
                />
                <ul>
                  <li>{navData?.phone?.phoneNo}</li>
                </ul>
              </>
            )}
          </div>
        </div>
        {navData?.btn && (
          <>
            <div className="nav__btn">
              <Button btn={navData.btn} />
            </div>
          </>
        )}
      </nav>
    </div>
  );
}
