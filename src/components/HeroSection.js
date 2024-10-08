import React, { useRef } from 'react';
import "../index.css";

const HeroSection = () => {
  const shopNowRef = useRef(null);

  const scrollToShopNow = () => {
    if (shopNowRef.current) {
      shopNowRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/nyse.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white text-center p-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">Look Good, Feel Bullish</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">Discover our exclusive collection of products</p>
        <button 
          className="bg-green-950 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          onClick={scrollToShopNow}
          ref={shopNowRef}
        >
          Shop Now
        </button>
      </div>
      <div ref={shopNowRef} />
    </div>
  );
};

export default HeroSection;
