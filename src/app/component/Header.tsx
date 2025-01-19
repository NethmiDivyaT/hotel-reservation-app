"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
    const [currentImage, setCurrentImage] = useState(0);
      // Images for the slideshow
  const images = [
    "/images/Hotel_Homepage.jpg",
    "/images/Hotel_Homepage2.jpg",
    "/images/Hotel_Homepage3.jpg",
  ];
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
  return (
    <>
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
              <Link href="/pages/accommodation">Accommodation</Link>
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
</>
  );
}
