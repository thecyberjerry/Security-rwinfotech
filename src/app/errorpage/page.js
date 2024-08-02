import React from "react";
import Navbar from "../components/Navbar"; 
import { navbar, logo, error } from "../json/myerror";
import Myerror from "../components/Myerror";
export default function page() {
  return (
    <React.Fragment>
      <Navbar navData={navbar} logo={logo} />
      <Myerror errorData={error} /> 
    </React.Fragment>
  );
}
