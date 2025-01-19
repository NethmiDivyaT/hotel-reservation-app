"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Homepage: React.FC = () => {

  const [clickedImage, setClickedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);



  const galleryImages = [
    { src: "/images/galleFort.jpg", title: "GALLE FORT" },
    { src: "/images/surfing.jpg", title: "SURFING" },
    { src: "/images/riverSafari.jpg", title: "RIVER SAFARI" },
    { src: "/images/whale_watching.jpg", title: "WHALE WATCHING" },
    { src: "/images/Bike_Ride.jpg", title: "BIKE RIDES" },
    { src: "/images/Beach.jpg", title: "BEACHES" },
  ];

  const packages = [
    {
      src: "/images/room1.jpg",
      name: "Luxury Suite",
      description: "Experience elegance and comfort in our luxury suites.",
    },
    {
      src: "/images/room2.jpg",
      name: "Deluxe Room",
      description: "Relax in style in our beautifully designed deluxe rooms.",
    },
    {
      src: "/images/room3.jpg",
      name: "Family Package",
      description: "Perfect for families, with spacious accommodations.",
    },
    {
      src: "/images/room4.jpg",
      name: "Honeymoon Package",
      description: "Romantic getaway with special amenities for couples.",
    },
  ];


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % packages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? packages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); 
    return () => clearInterval(interval);
  }, []);



  return (
    <div>


     
      {/* Content */}
      <section className="text-center p-10 w-2/3 mx-auto">
        <>
          <h1 className="text-2xl text-gray-900 font-bold mb-1">
            AN ENRICHING COASTAL RETREAT – HOTEL LUXGUARY
          </h1>
          <p className="text-gray-500 text-xl">
            Hotel Luxguary draws inspiration from the historic Galle Fort, embodying the craftsmanship, natural materials,
            and thoughtful proportions that define this UNESCO World Heritage site. Merging contemporary elegance with traditional
            South Asian influences, the hotel is designed to harmonize with its surroundings, offering a timeless connection to
            its environment and creating a deeply enriching experience for the discerning traveller.
          </p>
        </>
      </section>
          {/* Gallery Section */}
          <section>
        <div className="grid grid-cols-6 gap-4 p-10">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`col-span-1 bg-gray-100 p-4 transition-transform duration-300 ${
                clickedImage === index ? "scale-110" : "scale-100"
              }`}
              onMouseMove={() =>
                setClickedImage(clickedImage === index ? null : index)
              }
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-32 object-cover mb-2"
              />
              <h6 className="text-center text-gray-500">{image.title}</h6>
            </div>
          ))}
        </div>
      </section>
      {/* offers */}
      <section>
        <div className="grid grid-cols-3 gap-4 p-10">
            <div className="col-span-1 bg-gray-100 p-4 flex items-center justify-center flex-col text-center">
            <h2 className="text-gray-900 text-2xl mb-3 ">OFFERS &amp; PACKAGES</h2>
            <h3 className="text-gray-700 text-xl mb-3">Early Bird Offer</h3>
            <p className="text-gray-500 text-lg ml-5 mr-5">Plan ahead and make your dream vacation a reality with 20% off.</p>
            </div>
          <div className="col-span-2 bg-gray-500 p-4">
          <img
          src="/images/room1.jpg"
          alt="Hotel Room"
          className="w-full transition-opacity duration-1000 ease-in-out"
        />
          </div>
        </div>
      </section> 
      {/*details*/}
      <section>
        <h1 className="text-gray-900 text-center" style={{fontSize:"30px"}}>HIGHLIGHTS OF HOTEL LUXGUARY</h1>
        <div className="grid grid-cols-2 gap-4 p-10">
          <div className="col-span-1 bg-gray-100 p-4 flex items-start justify-start flex-col text-center">
            <img src="/images/bar.jpg" alt="bar" className="mb-8 hover:shadow-md"/>
            <h3 className="text-gray-700 text-xl mb-4 text-center relative">A GRAND CELEBRATION: WHERE MEMORIES TAKE ROOT</h3>
            <p className="text-gray-500 text-lg">With us, a Grand celebration is more than just beautiful;
           it’s an experience that enriches your celebration and begins a lifetime of shared memories. 
           Let us make every moment extraordinary, honoring a love as timeless as yours.</p>
          </div>
          <div className="col-span-1 bg-gray-100 p-4 flex items-start justify-start flex-col text-center">
          <img src="/images/gym.jpg" alt="gym" className="mb-8"/>
            <h3 className="text-gray-700 text-xl mb-4 text-center">NURTURE YOUR WELL-BEING</h3>
            <p className="text-gray-500 text-lg">Nurture your well-being during your stay at Le Grand Galle. 
            Enjoy our fitness center to stay active at your convenience, and inquire about our yoga and meditation sessions 
            available upon request. Speak to us about creating a personalized wellness experience tailored just for you.</p>
          </div>
          <div className="col-span-1 bg-gray-100 p-4 flex items-start justify-start flex-col text-center">
          <img src="/images/pool.jpg" alt="pool" className="mb-8"/>
            <h3 className="text-gray-700 text-xl mb-4 text-center">POOLSIDE BLISS</h3>
            <p className="text-gray-500 text-lg">Unwind at our exquisite pool, a true sanctuary at Le Grand Galle. 
              Surrounded by lush greenery, this expansive space invites you to relax all day. Sip a cocktail from the poolside bar, 
              read a book, or simply soak up the sun while enjoying breathtaking views of the Galle Fort.</p>
          </div>
          <div className="col-span-1 bg-gray-100 p-4 flex items-start justify-start flex-col text-center">
          <img src="/images/bathtub.jpg" alt="bathtub" className="mb-8"/>
            <h3 className="text-gray-700 text-xl mb-4 text-center">REVIVE, RESTORE, AND REJUVENATE</h3>
            <p className="text-gray-500 text-lg">A sanctuary of relaxation, our spa offers a serene escape where skilled therapists pamper you 
              with indulgent Balinese treatments, creating an oasis to rejuvenate, mind, body, and soul.</p>
          </div>
        </div>
      </section>
      {/*Package details*/}
      <section>
      <div className="relative p-10">
      <h2 className="text-gray-900 text-2xl text-center mb-5">
        ROOM PACKAGES
      </h2>
      <div className="relative overflow-hidden">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="min-w-full relative"
              style={{ height: "400px" }}
            >
              <img
                src={pkg.src}
                alt={pkg.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <p className="mb-4">{pkg.description}</p>
                <button className="border-2 border-yellow-600 px-4 py-2 text-lg rounded-md hover:bg-yellow-600">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-md hover:bg-yellow-600 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-128-128c-12.5-12.5-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 256l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-md hover:bg-yellow-600 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M64 448c8.188 0 16.38-3.125 22.62-9.375l128-128c12.5-12.5 12.5-32.75 0-45.25l-128-128c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L146.7 256 41.38 361.4c-12.5 12.5-12.5 32.75 0 45.25C47.62 444.9 55.81 448 64 448z" />
          </svg>
        </button>
      </div>
      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {packages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-yellow-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
      </section>
    </div>
  );
};

export default Homepage;
