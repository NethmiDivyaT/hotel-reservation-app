"use client";

import React, { useEffect, useState } from "react";

const Homepage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentPackageImage, setPackageCurrentImage] = useState(0);
  const [clickedImage, setClickedImage] = useState<number | null>(null);

  // Images for the slideshow
  const images = [
    "/images/Hotel_Homepage.jpg",
    "/images/Hotel_Homepage2.jpg",
    "/images/Hotel_Homepage3.jpg",
  ];

  const galleryImages = [
    { src: "/images/galleFort.jpg", title: "GALLE FORT" },
    { src: "/images/surfing.jpg", title: "SURFING" },
    { src: "/images/riverSafari.jpg", title: "RIVER SAFARI" },
    { src: "/images/whale_watching.jpg", title: "WHALE WATCHING" },
    { src: "/images/Bike_Ride.jpg", title: "BIKE RIDES" },
    { src: "/images/Beach.jpg", title: "BEACHES" },
  ];


    const roomPackageGallery = [
    { src: "/images/room2.jpg", title: "Rooms" },
    { src: "/images/room3.jpg", title: "Rooms" },
    { src: "/images/room4.jpg", title: "Rooms" },
    { src: "/images/room5.jpg", title: "Rooms" },
  ];

  // Change the image every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, [images.length]);


  useEffect(() => {
    const interval = setInterval(() => {
      setPackageCurrentImage((prevImage) => (prevImage + 1) % roomPackageGallery.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, [roomPackageGallery.length]);

  // Add scroll event listener to change the header background color
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const image = document.getElementById("homepage-image");
      if (header && image) {
        const imageHeight = image.clientHeight;
        if (window.scrollY > imageHeight) {
          header.classList.add("bg-white", "text-black", "shadow-md", "border-gray-800");
          header.classList.remove("text-white");
        } else {
          header.classList.remove("bg-white", "text-black", "shadow-md");
          header.classList.add("text-white");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.style.display = "block";
    }
  };

  const closeMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.style.display = "none";
    }
  };

  return (
    <div>
      {/* Header */}
      <header
        id="header"
        className="fixed w-full h-28 z-50 top-0 text-white transition-colors duration-300"
      >
        <div className="relative">
          <img src="/images/logo.webp" alt="Hotel Logo" className="fixed top-2.5 right-2.5 w-20" />
          <button className="fixed top-2.5 right-1/2 border-2 border-white rounded-md p-3 text-lg hover:border-yellow-600 hover:text-yellow-600">
            Book Now
          </button>
          <button
            className="fixed top-2.5 left-2.5 border-2 border-white rounded-md p-3 text-lg hover:border-yellow-600 hover:text-yellow-600"
            onClick={openMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
        {/* Menu */}
        <div
          id="menu"
          className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 hidden"
        >
          <button
            className="absolute top-3 right-3 mb-5 border-2 border-black text-black rounded-md p-2 text-lg hover:border-yellow-600 hover:text-yellow-600"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
          <nav className="mt-10">
            <ul>
              <li className="p-4 border-b border-yellow-600 text-black hover:text-yellow-600">
                <a href="#home">Home</a>
              </li>
              <li className="p-4 border-b border-yellow-600 text-black hover:text-yellow-600">
                <a href="#accommodation">Accommodation</a>
              </li>
              <li className="p-4 border-b border-yellow-600 text-black hover:text-yellow-600">
                <a href="#dining">Dining</a>
              </li>
              <li className="p-4 border-b border-yellow-600 text-black hover:text-yellow-600">
                <a href="#gallery">Gallery</a>
              </li>
              <li className="p-4 border-b border-yellow-600 text-black hover:text-yellow-600">
                <a href="#contactus">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Homepage Image */}
      <div id="homepage-image" className="relative">
        <img
          src={images[currentImage]}
          alt="Hotel Homepage"
          className="w-full transition-opacity duration-1000 ease-in-out"
          style={{ height: "700px" }}
        />

        {/* Dots Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentImage === index ? "bg-yellow-600" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

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
      {/*Room Packages*/}
      <section>
      <div id="homepage-image" className="relative">
        <img
          src={images[currentPackageImage]}
          alt="Hotel Homepage"
          className="w-full transition-opacity duration-1000 ease-in-out"
          style={{ height: "700px" }}
        />

        {/* Dots Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentPackageImage === index ? "bg-yellow-600" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
      </section>
    </div>
  );
};

export default Homepage;
