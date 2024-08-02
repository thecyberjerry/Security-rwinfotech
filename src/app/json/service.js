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
  content: { first: "Our", second: "Services" },
  reverse: false,
  bgImg: "/assets/hero/hero_bg.png",
};
const aboutus = {
  information: [
    {
      reverse: true,
      displayImg: { src: "/assets/aboutus/aboutus.svg", alt: "Some Image" },
      headingImg: { src: "/assets/icons/card1.svg", alt: "Some Image" },
      heading: "Physical Security",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      lists: ["Personal Security Services", "Security for business"],
     btn: { title: "Read More", url: "#" },
    },
    {
      reverse: false,
      displayImg: { src: "/assets/aboutus/aboutus.svg", alt: "Some Image" },
      headingImg: { src: "/assets/icons/card2.svg", alt: "Some Image" },
      heading: "Home Security",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      lists: ["Personal Security Services", "Security for business"],
     btn: { title: "Read More", url: "#" },
    },
    {
      reverse: true,
      displayImg: { src: "/assets/aboutus/aboutus.svg", alt: "Some Image" },
      headingImg: { src: "/assets/icons/card3.svg", alt: "Some Image" },
      heading: "Communication",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      lists: ["Personal Security Services", "Security for business"],
     btn: { title: "Read More", url: "#" },
    },
    {
      reverse: false,
      displayImg: { src: "/assets/aboutus/aboutus.svg", alt: "Some Image" },
      headingImg: { src: "/assets/icons/card4.svg", alt: "Some Image" },
      heading: "Office Security",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      lists: ["Personal Security Services", "Security for business"],
     btn: { title: "Read More", url: "#" },
    },
    {
      reverse: true,
      displayImg: { src: "/assets/aboutus/aboutus.svg", alt: "Some Image" },
      headingImg: { src: "/assets/icons/card5.svg", alt: "Some Image" },
      heading: "House Security",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      lists: ["Personal Security Services", "Security for business"],
      btn: { title: "Read More", url: "#" },
    },
    {
      reverse: false,
      displayImg: { src: "/assets/aboutus/aboutus.svg", alt: "Some Image" },
      headingImg: { src: "/assets/icons/card6.svg", alt: "Some Image" },
      heading: "Office Security",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      lists: ["Personal Security Services", "Security for business"],
     btn: { title: "Read More", url: "#" },
    },
  ],
};
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
export { navbar, logo, hero, aboutus, contactus };
