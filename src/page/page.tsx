import React, { FC } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Journey from "../components/Journey";
import Landing from "../components/Landing";
import Projects from "../components/Projects";

const Page: FC = () => {
  return (
    <>
      <Landing />
      <About />
      <Journey />
      <Projects />
      <Contact />
    </>
  );
};

export default Page;
