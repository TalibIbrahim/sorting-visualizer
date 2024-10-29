import React from "react";
import NavBar from "../UI/NavBar";
import Footer from "../UI/Footer";

const LayoutWrapper = (props) => {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
