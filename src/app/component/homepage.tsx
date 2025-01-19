"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Homepage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [clickedImage, setClickedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Change the image every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, [images.length]);

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
              <Link href="/">Home</Link>
              </li>
              <li className="p-4 border-b border-yellow-600 text-black hover:text-yellow-600">
              <Link href="/accommodation">Accommodation</Link>
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
      {/* Footer */}
    <footer
      className="text-white p-10"
      style={{
        backgroundImage: "url('/images/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-50 p-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>123 Luxury St, Galle, Sri Lanka</p>
            <p>Email: info@luxguaryhotel.com</p>
            <p>Phone: +94 77 123 4567</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:text-yellow-600">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#accommodation" className="hover:text-yellow-600">
                  Accommodation
                </a>
              </li>
              <li className="mb-2">
                <a href="#dining" className="hover:text-yellow-600">
                  Dining
                </a>
              </li>
              <li className="mb-2">
                <a href="#gallery" className="hover:text-yellow-600">
                  Gallery
                </a>
              </li>
              <li className="mb-2">
                <a href="#contactus" className="hover:text-yellow-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0zM7.188 20.452H3.548V9.042h3.64v11.41zM5.368 7.548c-1.164 0-2.108-.944-2.108-2.108 0-1.164.944-2.108 2.108-2.108 1.164 0 2.108.944 2.108 2.108 0 1.164-.944 2.108-2.108 2.108zm15.084 12.904h-3.64v-5.548c0-1.32-.026-3.016-1.84-3.016-1.84 0-2.12 1.437-2.12 2.924v5.64h-3.64V9.042h3.492v1.56h.048c.488-.924 1.68-1.896 3.456-1.896 3.696 0 4.376 2.432 4.376 5.592v6.154z" />
                </svg>
              </a>
              <a href="#" className="hover:text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                </svg>
              </a>
              <a href="#" className="hover:text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c-5.488 0-9.837 4.449-9.837 9.837 0 4.354 2.82 8.065 6.73 9.387-.092-.797-.175-2.027.036-2.905.191-.82 1.233-5.225 1.233-5.225s-.314-.628-.314-1.554c0-1.454.844-2.538 1.895-2.538.893 0 1.325.67 1.325 1.474 0 .898-.571 2.242-.865 3.49-.246 1.04.522 1.887 1.548 1.887 1.857 0 3.287-1.96 3.287-4.785 0-2.5-1.798-4.24-4.374-4.24-2.98 0-4.73 2.237-4.73 4.548 0 .898.344 1.865.774 2.39.085.104.097.195.071.3-.077.32-.252 1.04-.286 1.18-.045.188-.148.228-.342.137-1.276-.592-2.073-2.448-2.073-3.94 0-3.204 2.33-6.145 6.72-6.145 3.527 0 6.27 2.515 6.27 5.88 0 3.497-2.204 6.3-5.26 6.3-1.025 0-1.99-.53-2.32-1.155l-.63 2.4c-.228.87-.84 1.96-1.25 2.63.94.29 1.93.45 2.96.45 5.488 0 9.837-4.449 9.837-9.837 0-5.388-4.449-9.837-9.837-9.837z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>&copy; {new Date().getFullYear()} Hotel Luxguary. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Homepage;
