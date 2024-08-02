import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact"; 
import Credentials from "../components/Credentials";
import Featureservice from "../components/Featureservice";
import {
  navbar,
  logo,
  hero,
  featureservice,
  contactus,
  credentials, 
} from "../json/contact";

export default function page() {
  return (
    <>
      <Hero navData={navbar} logo={logo} herodata={hero} />
      <Featureservice info={featureservice} />
      <Credentials creds={credentials} />
      <Contact contactData={contactus} /> 
    </>
  );
}
