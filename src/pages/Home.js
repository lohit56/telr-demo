import React from "react";
import Intro from "../components/Intro/Intro";
import Hero from "../components/Hero/Hero";
import Feature from "../components/Feature/Feature";

function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Feature />
    </div>
  );
}

export default Home;
