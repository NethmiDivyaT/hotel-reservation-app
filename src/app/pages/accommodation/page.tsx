"use client";

import { useRouter } from "next/navigation";

const Accommodation = () => {
  const router = useRouter();

  const handleBooking = () => {
    router.push("/pages/booking");
  };

  const packages = [
    {
      src: "/images/room1.jpg",
      name: "Luxury Suite",
      description: "Experience elegance and comfort in our luxury suites.",
      view: "Ocean View",
      bedSize: "King Size Bed",
      occupancy: "2 Adults",
    },
    {
      src: "/images/room2.jpg",
      name: "Deluxe Room",
      description: "Relax in style in our beautifully designed deluxe rooms.",
      view: "City View",
      bedSize: "Queen Size Bed",
      occupancy: "2 Adults",
    },
    {
      src: "/images/room3.jpg",
      name: "Family Package",
      description: "Perfect for families, with spacious accommodations.",
      view: "Garden View",
      bedSize: "Two Double Beds",
      occupancy: "2 Adults, 2 Children",
    },
    {
      src: "/images/room4.jpg",
      name: "Honeymoon Package",
      description: "Romantic getaway with special amenities for couples.",
      view: "Mountain View",
      bedSize: "King Size Bed",
      occupancy: "2 Adults",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
        HOTEL LUXGURY HOTEL ROOMS
      </h1>
      <p className="text-gray-500 text-lg text-center">
        Hotel Luxgury offers diverse accommodation options, catering to all
        your preferences and needs. From the elegant simplicity of standard
        rooms to the opulent embrace of our suites, every corner tells a tale
        of respite and indulgence. Our commitment to providing you with the
        best experience is reflected in every detail. Revel in living spaces
        where exceptional hospitality and comfort come together seamlessly.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            style={{
              width: "48%",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              position: "relative",
            }}
          >
            <img
              src={pkg.src}
              alt={pkg.name}
              style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
            />
            <h2 className="text-gray-700 text-xl mb-1 text-center">
              {pkg.name}
            </h2>
            <p className="text-gray-500 text-lg text-center">
              {pkg.description}
            </p>
            <p>
              <strong>View:</strong> {pkg.view}
            </p>
            <p>
              <strong>Bed Size:</strong> {pkg.bedSize}
            </p>
            <p>
              <strong>Occupancy:</strong> {pkg.occupancy}
            </p>
            <button
              onClick={handleBooking}
              className="border-2 border-yellow-600 rounded text-yellow-600 float-right px-4 py-2 hover:bg-yellow-600 hover:text-white"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
