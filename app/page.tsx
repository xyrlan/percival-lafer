import Image from "next/image";
import HomeSection from "./components/HomeSection";
import React from "react";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import ForthSection from "./components/ForthSection";
import FifthSection from "./components/FifthSection";
import SixthSection from "./components/SixthSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
    </>
  );
}