import React from "react";
import Hero from "../components/Hero";
import Recent from "../components/Recent";
import Videos from "../components/Videos";
import Reviews from "../components/Reviews";
import Heading from "../components/Heading";
import data  from "../data/data.json";


const Home = () => {
  return (
    <>
      <Hero
        image="./pictures/home.png"
        title="Welcome to Creative"
        subtitle="Unleash Your Imagination, Embrace Artistry."
        text="At Creative, we are more than just creators; we are curators of craftsmanship and champions of creativity. Step into a world where every stroke tells a story, every detail is a masterpiece, and every creation is a celebration of individuality."
        aboutText="Whether you're seeking a statement piece for your home, a heartfelt gift for a loved one, or a personalized memento for a special occasion, Creative is here to exceed your expectations. Join us in celebrating the beauty of handmade art and let us be a part of your creative journey"
      />
      <Heading text="New Items" />
      <Recent recent = {data.recent} />
      <Heading text="Videos" />
      <Videos />
      <Heading text="Reviews" />
      <Reviews />
    </>
  );
};

export default Home;
