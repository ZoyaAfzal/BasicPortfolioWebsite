
import React from "react";
import Intro from "@/components/intro";
import About from "@/components/about";
import Contact from "@/components/contact";

const HomePage = () => {
  return (
    <div className="homepage">
      <Intro />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
