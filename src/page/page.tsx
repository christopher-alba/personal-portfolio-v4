import React, { FC } from "react";
import About from "../components/About";
import Journey from "../components/Journey";
import Landing from "../components/Landing";

const Page: FC = () => {
  return (
    <>
      <Landing />
      <About />
      <Journey />
    </>
  );
};

export default Page;
