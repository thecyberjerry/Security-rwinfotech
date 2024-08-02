import React from "react";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import Contact from "../components/Contact"; 
import Credentials from "../components/Credentials";
import Testimonials from "../components/Testimonials";
import Featureservice from "../components/Featureservice";
import {
  navbar,
  logo,
  hero,
  aboutus,
  contactus,
  credentials,
  testimonials,
  featureservice, 
} from "../json/aboutus";

export default function page() {
  return (
    <>
      <Hero navData={navbar} logo={logo} herodata={hero} />
      <Aboutus info={aboutus} />
      <Featureservice info={featureservice} />
      <Credentials creds={credentials} />
      <Testimonials testimonialdata={testimonials} />
      <Contact contactData={contactus} /> 
    </>
  );
}
