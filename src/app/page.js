import Aboutus from "./components/Aboutus";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Featureservice from "./components/Featureservice"; 
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import {
  navbar,
  hero,
  aboutus,
  services,
  featureservice,
  credentials,
  testimonials,
  articles,
  contactus,
  logo, 
} from "./json/home";
export default function Home() {
  return (
    <>
      <Hero navData={navbar} logo={logo} herodata={hero} />
      <Aboutus info={aboutus} />
      <Services serviceData={services} />
      <Featureservice info={featureservice} />
      <Credentials creds={credentials} />
      <Testimonials testimonialdata={testimonials} />
      <Articles articlesData={articles} />
      <Contact contactData={contactus} />
    </>
  );
}
