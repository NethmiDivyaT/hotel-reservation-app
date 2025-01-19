"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function footer() {
  return (
    <>
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
</>
  );
}
