//Main font used is Lato, other font is merriweather
//Tailwind CSS allows you to style elements by applying utility classes directly to the HTML elements


import profileone from "../Assets/profileone.png";  //avatar to be replaced by someones image
import whiteboard from "../Assets/whiteboard.png";
import leftdesign from "../Assets/leftdesign.png";
import logofb from "../Assets/logofb.png";    //4 logos to be used in footer
import logolnk from "../Assets/logolnk.png";
import logotwitter from "../Assets/logotwitter.png";
import logoyt from "../Assets/logoyt.png";
import money from "../Assets/money.png";
import student from "../Assets/student.png";
import search from "../Assets/search.png";
import fulltime from "../Assets/fulltime.png";
import bgimage from "../Assets/bgimage.png";  //has been used as logo and search logo for now

import React from "react";      //import react library

// Header Component
//div is HTML component to group content, classname attribute applies CSS styles
//flex makes container flexible to arrange child elements, justify-between distributes child elements evenly, py px for padding
//alt is alternative text in case img cant load
const Header = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto py-4 px-6">
      <div className="flex items-center">
        <img src={bgimage} alt="Logo" className="w-10 h-10" />
        <span className="ml-3 font-bold text-xl text-[#171a1f]">THUtorium</span>
      </div>
      <button className="bg-primary text-white rounded-full py-2 px-6 shadow-md">
        Register
      </button>
      
    </div>
  );
};

//br breaks to next line
//input element allows you to type in search queries
//map() allowed to create a set of buttons for all subjects instead of creating a button one by one
//bg-cover ensures bg image covers entire element without distortion
//w-full sets img width to 100% of its container, mb-8 adds margin to bottom
//mx-auto centers the container horizontaly for searchbar, rounded-full rounds corners fully
//searchbar uses bgimage icon, should use a magnifying glass icon
// Hero Section Component
const HeroSection = () => {
  return (
    <div
      className="text-center py-16 px-6 bg-cover bg-center">
      <img src={bgimage} alt="Background" className="w-full h-80 object-cover mb-8" />
      <h2 className="text-yellow-600 font-bold text-lg">100% satisfaction guarantee</h2>
      <h1 className="text-5xl font-Lato text-gray-800 mt-4">
        Find your <br /> perfect tutor
      </h1>
      <div className="mt-6 w-full max-w-2xl mx-auto bg-white rounded-full shadow-md flex items-center pl-4 pr-6 py-2 border border-gray-300">
        <img src={bgimage} alt="bgimage" className="w-6 h-6 mr-3" />
        <input
          type="text"
          placeholder="Search"
          className="w-full border-none focus:ring-0 focus:outline-none text-gray-500"
        />
      </div>
      <div className="flex justify-center gap-8 mt-8">
        {['Engineering', 'Programming', 'Languages', 'Mathematics', 'See All'].map((category) => (
          <button
            key={category}
            className="bg-gray-100 text-black py-2 px-8 rounded-full shadow opacity-80"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

//just for visual aesthetics numbers are not valid
//use of map function to display statistics
// Stats Section Component
const StatsSection = () => {
  return (
    <div className="w-full bg-[#003366] text-white py-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { number: "870", text: "expert tutors" },
          { number: "200+", text: "hours tutored" },
          { number: "298", text: "Subjects and courses" },
          { number: "72920", text: "Active students" },
        ].map((item, index) => (
          <div key={index}>
            <h4 className="text-3xl font-bold">{item.number}</h4>
            <p className="text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

//grid makes container a grid, sm:grid-cols-2 means on small screen 2 cols, md means medium screen 4 cols, default screens 1 col, gap-8 adds gap between grid items
//mx-auto centers icon horizontally
// Benefits Section Component
const BenefitsSection = () => {
  return (
    <div className="py-16 px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-yellow-600 font-bold text-lg">Why choose us?</h2>
        <h3 className="text-4xl font-semibold text-gray-800 mt-4 mb-8">
          Benefits of online tutoring with us
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: student,
              title: "One on-one teaching",
              description:
                "velit. Eu elit cillum eiusmod sint adipisicing exercitation. Lorem reprehenderit deserunt in enim occae",
            },
            {
              icon: fulltime,
              title: "24/7 availability",
              description:
                "velit. Eu elit cillum eiusmod sint adipisicing exercitation. Lorem reprehenderit deserunt in enim occae",
            },
            {
              icon: whiteboard,
              title: "Interactive Whiteboard",
              description:
                "velit. Eu elit cillum eiusmod sint adipisicing exercitation. Lorem reprehenderit deserunt in enim occae",
            },
            {
              icon: money,
              title: "Affordable Prices",
              description:
                "velit. Eu elit cillum eiusmod sint adipisicing exercitation. Lorem reprehenderit deserunt in enim occae",
            },
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 border rounded-lg shadow-md">
              <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer Component
//contains links and brandings which are not true for now
const Footer = () => {
  return (
    <div className="bg-[#e0e0e0] py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div>
          <div className="flex items-center mb-4">S
            <img src={bgimage} alt="bgimage" className="w-10 h-10" />
            <h4 className="ml-3 text-2xl font-bold">THUtorium</h4>
          </div>
          <p className="text-gray-600">&copy; 2022 Brand, Inc.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Product</h4>
          <ul>
            <li className="text-gray-700 mb-2">Features</li>
            <li className="text-gray-700">Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Resources</h4>
          <ul>
            <li className="text-gray-700 mb-2">Blog</li>
            <li className="text-gray-700 mb-2">User guides</li>
            <li className="text-gray-700">Webinars</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

//Testimonial section
const Frame = () => {
  return (
    <div className="flex flex-col items-center gap-3 relative">
      {/* Testimonials Heading */}
      <div className="flex flex-col items-center px-4 py-2 w-full">
        <div className="font-merriweather-sans text-[#ffa000] text-base text-center">
          Our Testimonials
        </div>
        <p className="font-lato font-semibold text-[#171a1f] text-2xl text-center">
          What Our Students Say About Us
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="w-full h-64 bg-white overflow-hidden border-none">
        <div className="w-[490px] h-[268px] mx-auto relative">
          <img className="w-14 h-14 top-4 left-44 absolute" alt="Avatar" src={profileone} />

          <div className="w-full h-40 mt-16">
            <div className="text-center">
              <span className="font-inter text-[#171a1f] text-sm">Annie Haley</span>
              <span className="ml-4 font-inter font-bold text-[#171a1f] text-sm">4.5</span>
            </div>

            <p className="mt-4 font-merriweather text-[#171a1f] text-sm text-center">
              Nostrud excepteur magna id est quis in aliqua consequat. Exercitation enim eiusmod elit sint laborum
            </p>

            <div className="absolute top-[72px] right-2 font-archivo text-[#bcc1ca] text-6xl font-bold">”</div>
            <div className="absolute top-[72px] left-2 font-archivo text-[#bcc1ca] text-6xl font-bold">“</div>
          </div>

          <img className="w-11 h-11 top-5 left-60 absolute" alt="Avatar" src={profileone} />
          <img className="w-11 h-11 top-5 left-30 absolute" alt="Avatar" src={profileone} />
        </div>
      </div>
    </div>
  );
};

// Main Frame Component
export const Frame1 = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white overflow-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Frame1;
