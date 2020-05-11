import React from "react";
import Navigation from "../components/NavBar";
import CarouselHome from "../components/CarouselHome";
import NewArrival from "../components/NewArrival";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <CarouselHome />
        <NewArrival />
      </div>
    );
  }
}

export default Home;
