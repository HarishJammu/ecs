'use client'
import { useState } from "react";
import Slider from "react-slick";
import styles from "../../styles/Home.module.css";

export default function HeroSection() {
  const [showCategories, setShowCategories] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const images = [
    "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png", // Add your image paths
    "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
    "https://www.shutterstock.com/image-photo/beautiful-sunset-on-mountain-trail-260nw-2514590557.jpg",
    "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png", // Add your image paths
    "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
    "https://www.shutterstock.com/image-photo/beautiful-sunset-on-mountain-trail-260nw-2514590557.jpg",

  ];

  const settings = {
    dots: true, // Enables navigation dots (bottom-right)
    infinite: true, // Loop carousel infinitely
    speed: 1000, // Transition speed (1 second)
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds per slide
    arrows: false, // Disable default arrows
  };

  return (
    <section className={styles.heroSection}>
      {/* Carousel */}
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Transparent Buttons */}
      <div className={styles.buttons}>
        <button
          className={styles.transparentButton}
          onClick={() => setShowCategories(!showCategories)}
        >
          Categories
        </button>
        <button
          className={styles.transparentButton}
          onClick={() => setShowAbout(!showAbout)}
        >
          About
        </button>
      </div>

      {/* Categories Overlay */}
      {showCategories && (
        <div className={styles.overlay}>
          <button
            className={styles.closeButton}
            onClick={() => setShowCategories(false)}
          >
            Close
          </button>
          <h2>Categories</h2>
          <p>Content about categories goes here...</p>
        </div>
      )}

      {/* About Overlay */}
      {showAbout && (
        <div className={styles.overlay}>
          <button
            className={styles.closeButton}
            onClick={() => setShowAbout(false)}
          >
            Close
          </button>
          <h2>About</h2>
          <p>Content about "About" goes here...</p>
        </div>
      )}
    </section>
  );
}
