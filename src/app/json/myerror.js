const navbar = {
  list: [
    { title: "Home", url: "/" },
    { title: "ContactUs", url: "/contactus" },
    { title: "AboutUs", url: "/aboutus" },
    { title: "Service", url: "/service" },
    { title: "ErrorPage", url: "/errorpage" },
  ],
  phone: {
    icon: { src: "/assets/icons/Phone-Icon.svg", alt: "Some Image" },
    phoneNo: "999999999",
  },
  btn: { title: "Login", url: "#", blackBackground: false },
  navbtn: { title: "Login", url: "#", blackBackground: true },
  toggle: true,
};
const logo = {
  logoImg: { src: "/logo/Logo.svg", alt: "Some Image" },
  title: "AISCURE",
  url: "/",
};
const error = {
  errorImg: { src: "/assets/404/error.svg", alt: "Some Image" },
  heading: "OOPS! You Got Lost",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, saepe eum impedit architecto perferendis quas natus molestias laudantium aliquam quia.",
  btn: { title: "Back To Home", url: "/" },
};

export { navbar, logo, error };
