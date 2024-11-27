'use client'
import Slider from "react-slick";
import styles from "../../styles/Home.module.css";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // If needed for pagination features
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
export default function HeroSection() {
  // const [showCategories, setShowCategories] = useState(false);
  // const [showAbout, setShowAbout] = useState(false);

  // const images = [
  //   "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png", // Add your image paths
  //   "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
  //   "https://www.shutterstock.com/image-photo/beautiful-sunset-on-mountain-trail-260nw-2514590557.jpg",
  //   "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png", // Add your image paths
  //   "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
  //   "https://www.shutterstock.com/image-photo/beautiful-sunset-on-mountain-trail-260nw-2514590557.jpg",

  // ];

  // const settings = {
  //   dots: true, // Enables navigation dots (bottom-right)
  //   infinite: true, // Loop carousel infinitely
  //   speed: 1000, // Transition speed (1 second)
  //   slidesToShow: 1, // Show one slide at a time
  //   slidesToScroll: 1, // Scroll one slide at a time
  //   autoplay: true, // Enable autoplay
  //   autoplaySpeed: 3000, // 3 seconds per slide
  //   arrows: false, // Disable default arrows
  // };

  // return (
  //   <section className={styles.heroSection}>
  //     {/* Carousel */}
  //     <div className={styles.carouselContainer}>
  //       <Slider {...settings}>
  //         {images.map((image, index) => (
  //           <div key={index} className={styles.slide}>
  //             <img src={image} alt={`Slide ${index + 1}`} />
  //           </div>
  //         ))}
  //       </Slider>
  //     </div>

  //     {/* Transparent Buttons */}
  //     <div className={styles.buttons}>
  //       <button
  //         className={styles.transparentButton}
  //         onClick={() => setShowCategories(!showCategories)}
  //       >
  //         Categories
  //       </button>
  //       <button
  //         className={styles.transparentButton}
  //         onClick={() => setShowAbout(!showAbout)}
  //       >
  //         About
  //       </button>
  //     </div>

  //     {/* Categories Overlay */}
  //     {showCategories && (
  //       <div className={styles.overlay}>
  //         <button
  //           className={styles.closeButton}
  //           onClick={() => setShowCategories(false)}
  //         >
  //           Close
  //         </button>
  //         <h2>Categories</h2>
  //         <p>Content about categories goes here...</p>
  //       </div>
  //     )}

  //     {/* About Overlay */}
  //     {showAbout && (
  //       <div className={styles.overlay}>
  //         <button
  //           className={styles.closeButton}
  //           onClick={() => setShowAbout(false)}
  //         >
  //           Close
  //         </button>
  //         <h2>About</h2>
  //         <p>Content about "About" goes here...</p>
  //       </div>
  //     )}
  //   </section>
  // );
  const images = [
    'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730513/fantasy-couple-getting-married1_c0wcib.png',
    'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730512/fantasy-couple-getting-married2_jv1fqi.png',
    'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730505/fantasy-couple-getting-married_eccnfm.png',
    'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730501/fantasy-couple-getting-married3_hld2v0.png',
    'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730500/fantasy-couple-getting-married4_bmdzcy.png',
  ];
  const [showCategory, setShowCategory] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);// Start with the first image
  const totalSlides = images.length; // Total number of images

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleCategoryClick = () => {
    setShowCategory(true);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleClose = () => {
    setShowCategory(false);
    setShowAbout(false);
  };
  return (
    <div className="carousel-container">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Sync index with Swiper
        className="custom-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-slide">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className={`carouselImage ${activeIndex === index ? 'active' : ''}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dynamic Slide Index Indicator */}
      <div className="slide-indicator">
        <ChevronLeftIcon
          className="h-6 w-6 text-gray-500 cursor-pointer"
          onClick={handlePrevious}
        />
        {[activeIndex - 1, activeIndex, activeIndex + 1].map((index) => {
          const displayIndex = (index + images.length) % images.length; // Wrap index
          return (
            <span
              key={index}
              className={`indicator-number ${index === activeIndex ? 'active' : 'inactive'}`}
            >
              {displayIndex + 1}
            </span>
          );
        })}
        <ChevronRightIcon
          className="h-6 w-6 text-gray-500 cursor-pointer"
          onClick={handleNext}
        />
      </div>

      {/* Styles */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 500px;
        }

        .carousel-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .carousel-slide img {
          width: 100%;
          height: 90vh;
          object-fit: cover;
        }

        .fixed-buttons {
          position: absolute;
          top: 50%;
          right: 20px;
          display: flex;
          flex-direction: column;
          transform: translateY(100%);
          z-index: 1;
        }

        .category-button, .about-button {
          margin: 10px 0;
          padding: 10px 15px;
          background-color: rgba(0, 0, 0, 0.7);
          color: #fff;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
        }

        .category-button:hover, .about-button:hover {
          background-color: rgba(0, 0, 0, 0.9);
        }

        .arrows-container {
          position: absolute;
          bottom: 20px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 50px;
          z-index: 1;
        }

        .swiper-button-prev, .swiper-button-next {
          font-size: 24px;
          cursor: pointer;
          color: rgba(0, 0, 0, 0.7);
        }

        .slide-indicator {
          bottom: 60px;
          right: 20px;
          display: flex;
          justify-content: end;
          align-items: center;
          z-index: 1;
          margin-right:1.25rem
        }

        .indicator-number {
          margin: 0 5px;
          font-size: 18px;
          transition: opacity 0.3s;
        }

        .active {
          opacity: 1;
          font-weight: bold;
        }

        .inactive {
          opacity: 0.5;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .overlay-content {
          background: #fff;
          padding: 20px;
          width: 80%;
          max-width: 500px;
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: red;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
