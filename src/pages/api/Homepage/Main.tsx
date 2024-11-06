
import React from "react";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <div className="lg:mx-32 md:mx-4">
      <Intro />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
