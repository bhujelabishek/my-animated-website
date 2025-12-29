"use client";
import React from "react";
import Marquees from "../home/marquees";
import Services from "../home/services";
import Products from "../home/products";

const Homepage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* ----- HERO SECTION ----- */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg')" }}>
        
        <div className="bg-black/40 w-full h-full absolute top-0 left-0"></div>

        <div className="relative z-10 text-center text-white p-6">
          <h2 className="text-4xl font-bold mb-4">Explore The World With Ease</h2>
          <p className="text-lg mb-6">Discover new places, share experiences, and connect with travelers.</p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
            Start Exploring 
          </button>
        </div>
      </section>

      {/* ----- CONTENT SECTION ----- */}
      <section className="max-w-6xl mx-auto p-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Top Destinations</h3>
        <p className="text-gray-600 mb-6">Explore trending destinations around the globe.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* SAMPLE CARD */}
          <div className="rounded-xl shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
              className="w-full h-48 object-cover"
              alt="destination"
            />
            <div className="p-4">
              <h4 className="font-bold">Switzerland</h4>
              <p className="text-sm text-gray-500">Beautiful mountains & nature</p>
            </div>
          </div>

          <div className="rounded-xl shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg"
              className="w-full h-48 object-cover"
              alt="destination"
            />
            <div className="p-4">
              <h4 className="font-bold">Paris</h4>
              <p className="text-sm text-gray-500">The city of love & art</p>
            </div>
          </div>

          <div className="rounded-xl shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg"
              className="w-full h-48 object-cover"
              alt="destination"
            />
            <div className="p-4">
              <h4 className="font-bold">Japan</h4>
              <p className="text-sm text-gray-500">Modern culture & tradition</p>
            </div>
          </div>
        </div>
      </section>
      <Services/>
      <Products/>
      <Marquees/>
    </div>
  );
};

export default Homepage;
