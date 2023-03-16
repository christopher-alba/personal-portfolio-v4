import React, { FC } from "react";
import About from "../components/About";
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
    </>
  );
};

export default Page;
