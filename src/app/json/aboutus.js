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
    phoneNo: "99999999",
  },
  btn: { title: "Login", url: "#", blackBackground:false },
  navbtn: { title: "Login", url: "#", blackBackground: true },
  toggle: false,
};
const logo = {
  logoImg: { src: "/logo/Logo.svg", alt: "Some Image" },
  title: "AISCURE",
  url:"/"
};

const hero = {
  content: { first: "About", second: "Us" },
  reverse: false,
  bgImg: "/assets/hero/hero_bg.png",
};
const aboutus = {
  information: [
    {
      reverse: false,
      displayImg: { src: "/assets/aboutus/aboutus.svg", alt: "Some Image" },
      headingImg: { src: "", alt: "Some Image" },
      heading: "We are always on guard for your family and business",
      desc: "only five centuries, but also the leap into electronic typesetting, remainingt essentially uncthanged. It was popularised.",
      lists: ["Personal Security Services", "Security for business"],
      btn: { title: "Read More", url: "#",blackBackground:false  },
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
  btn: { title: "Submit", url: "#",blackBackground:false  },
};
const featureservice = {
  information: [
    {
      reverse: true,
      displayImg: {
        src: "/assets/featureservice/feature_service.svg",
        alt: "Some Image",
      },
      headingImg: { src: "", alt: "Some Image" },
      heading:
        "We Provide Customized Security Solutions to Help, Protect Your People ",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      lists: [],
      btn: { title: "Order Now", url: "#",blackBackground:false  },
    },
  ],
};
const testimonials = {
  heading: "Testimonials",
  testimonialsCard: [
    {
      icon: { src: "assets/icons/testimonials.svg", alt: "SomeImage" },
      desc: "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, byinjected humour, or randomised don't look even slightly believable.",
      userPic: { src: "assets/testimonials/user_img.svg", alt: "Some Image" },
      userName: "Chota Bheem",
    },
  ],
};
export {
  navbar,
  logo,
  hero,
  aboutus,
  contactus,
  credentials,
  testimonials,
  featureservice,
};
