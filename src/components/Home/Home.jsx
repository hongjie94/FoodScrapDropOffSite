import React from "react";
import Navbar from "../Layout/Navbar.jsx";
import HeroImage from "../../assets/hero.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-10 lg:px-40 lg:pt-20 h-auto">
      <h1 class="text-[#DA4C31] text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-semibold">
        Food scrap drop-off Site
      </h1>
      <Navbar />

    <div class="flex flex-col-reverse xl:flex-row justify-between items-center">
    <div class="w-full xl:w-1/2">
      <h1 class="text-[#DA4C31] text-2xl md:text-4xl 2xl:text-5xl font-light font-inter  md:my-2 mt-5 md:mt-10">
        Compost Your Food Scraps
      </h1>
      <h1 class="text-[#4CAF50] text-2xl md:text-4xl 2xl:text-5xl font-semibold font-inter mb-4 md:mb-2">
        Create a Greener NYC!
      </h1>
      <p class="my-4 md:my-10 font-light max-w-xlg">
        Help build a greener NYC by composting your food scraps. Transforming
        organic waste into nutrient-rich soil through composting reduces
        greenhouse gas emissions and improves soil health, contributing to a
        more sustainable and environmentally friendly city. Join the movement
        and make a positive impact on NYC's ecosystem by composting today.
      </p>
      <Link to="/location">
        <button class="heroBtn mt-6 md:mt-16 bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-3 px-4 rounded-full">
          Find Drop-Off Locations
        </button>
      </Link>
    </div>
    <div className="imageDiv">
      <img className="heroImage md:w-auto w-1/2 xl:p-10 p-20" src={HeroImage} alt="Responsive Image" />
    </div>
    </div>
  </div>
  );
};

export default Home;
