import React from "react";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import Contact from "../components/Contact"; 
import {
  navbar,
  logo,
  hero,
  aboutus,
  contactus, 
} from "../json/service";

export default function page() {
  return (
    <>
      <Hero navData={navbar} logo={logo} herodata={hero} />
      <Aboutus info={aboutus} />
      <Contact contactData={contactus} /> 
    </>
  );
}
