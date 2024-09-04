import React from "react";
import Hero from "../../sections/Hero";
import Overview from "../../sections/Overview";
import Services from "../../sections/Services";
import Clients from "../../sections/Clients";
// import Presence from "../../sections/Presence";
import Awards from "../../sections/Awards";
import GetInTouch from "../../sections/GetInTouch";

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <Services />
      <Awards />
      <Clients />
      {/* <GetInTouch /> */}
    </div>
  );
};

export default Home;
