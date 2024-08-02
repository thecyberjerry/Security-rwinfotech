const navbar = {
  list: [
    { title: "Home", url: "/" },
    { title: "ContactUs", url: "/contactus" },
    { title: "AboutUs", url: "/aboutus" },
    { title: "Service", url: "/service" },
    { title: "ErrorPage", url: "/errorpage" },
  ],
  phone: {
    icon: { alt: "Some Image", src: "/assets/icons/Phone-Icon.svg" },
    phoneNo: "(999)-999-999",
  },
  btn: { title: "Login", url: "#", blackBackground:false },
  navbtn: { title: "Login", url: "#", blackBackground: true },
  toggle: false,
};
const logo = {
  logoImg: { src: "/logo/Logo.svg", alt: "Some Image" },
  title: "AISCURE",
  url: "/",
};
const hero = {
  content: { first: "Contact", second: "Us" },
  reverse: false,
  bgImg: "/assets/hero/hero_bg.png",
};
const featureservice = {
  information: [
    {
      reverse: false,
      displayImg: {
        src: "/assets/featureservice/contactus.svg",
        alt: "Some Image",
      },
      headingImg: { src: "", alt: "Some Image" },
      heading: "Connect With Us on Social channels and Stay Updated.",
      desc: "Follow Us On Social media for exciting updates and exclusive offers",
      lists: [],
      btn: { title: "Follow Us", url: "#" },
    },
  ],
};

const credentials = [
  { heading: "150+", desc: "Guards Secure" },
  { heading: "400", desc: "Guards Secure" },
  { heading: "150+", desc: "Guards Secure" },
  { heading: "1500", desc: "Guards Secure" },
];
const contactus = {
  heroheading: { content: { first: "Contact", second: "Us" }, size: "3" },
  form: {
    firstName: "Enter First Name",
    secondName: "Enter Second Name",
    email: "Enter Email Address",
    phone: "Enter Your Phone Number",
    textArea: "Enter Your Message",
  },
  btn: { title: "Submit", url: "#" },
};
export { navbar, logo, hero, featureservice, contactus, credentials };
