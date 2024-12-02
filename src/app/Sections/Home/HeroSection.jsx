
'use client';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import "./Intro.css"
import { montserrat, mulish, syne, cormorant } from "../../utils/fonts";
import Category from './Category';
import AboutMe from './AboutME';
import RecentWorks from './RecentWorks';
const mulishFont = mulish.className;
const cormorantFont = cormorant.className;
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730513/fantasy-couple-getting-married1_c0wcib.png',
    'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730512/fantasy-couple-getting-married2_jv1fqi.png',
    'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730505/fantasy-couple-getting-married_eccnfm.png',
    'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730501/fantasy-couple-getting-married3_hld2v0.png',
    'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730500/fantasy-couple-getting-married4_bmdzcy.png',
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const [isClient, setIsClient] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length // Reset to 0 after last index
      );
    }, 3000); // Adjust interval time (e.g., 3000ms = 3 seconds)

    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

  const OpenandcloseCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
    setIsAboutOpen(false)
  };
  const OpenandcloseAbout = () => {
    setIsAboutOpen(!isAboutOpen)
    setIsCategoryOpen(false);

  };
  const features = [
    {
      id: "01",
      title: "Made with love",
      description: "Two people, true emotions, the big decision & the vows of eternal love forever!",
      icon: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733050525/candles_1_pmvwsa.png", // Replace with actual icons
    },
    {
      id: "02",
      title: "The Wedding Bliss",
      description: "An excellent customer service return investment makes you enjoy the event full-on!",
      icon: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733050526/couple_1_ptsz0f.png", // Replace with actual icons
    },
    {
      id: "03",
      title: "Just The Two Of Us",
      description: "We vendor the best musical band for the wedding event. Blissful music to celebrate!",
      icon: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733050526/wedding_1_ym18pa.png", // Replace with actual icons
    },
    {
      id: "04",
      title: "Made with love",
      description: "Our management is the best to make your big day memorable in every aspect of the event!",
      icon: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733050526/wedding_iwkqvu.png", // Replace with actual icons
    },
  ];

  return (
    <div>
      <div className="carouselWrapper">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="imageContainer">
              <img src={image} alt={`carousel image ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Show category overlay only if it's open */}
        {isClient && isCategoryOpen && (
          <div className="categoryOverlay">
            <Category />
          </div>
        )}
        {isClient && isAboutOpen && (
          <div className="categoryOverlay">
            <AboutMe />
          </div>
        )}

        <div className="overlayButtons">
          {!isCategoryOpen ? (
            <button onClick={OpenandcloseCategory} className={`overlayButton ${mulishFont}`}>
              Category
            </button>
          ) : (
            <button onClick={OpenandcloseCategory} className={`overlayButton ${mulishFont}`}>
              Close
            </button>
          )}

          {!isAboutOpen ? (
            <button onClick={OpenandcloseAbout} className={`overlayButton ${mulishFont}`}>
              About
            </button>
          ) : (
            <button onClick={OpenandcloseAbout} className={`overlayButton ${mulishFont}`}>
              Close
            </button>
          )}


        </div>

        {/* Navigation buttons */}
        <div className="navButtons">
          <button onClick={handlePrev} className="navButton">
            <ChevronLeftIcon className="h-7 w-7 icons-color" />
          </button>
          <button onClick={handleNext} className="navButton">
            <ChevronRightIcon className="h-7 w-7 icons-color" />
          </button>
        </div>
      </div>

      <div className="we-container">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="iconContainer">
              <span className={`index ${mulishFont}`}>{feature.id}</span>
              <img src={feature.icon} alt={`${feature.title} icon`} className="icon" />
            </div>
            <div className="recent-work-content">
              <h3 className={`title ${mulishFont}`}>{feature.title}</h3>
              <p className={`description ${mulishFont}`} >{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="quote-container">
        <h3 className={`quote ${cormorantFont}`}><i><span style={{ color: "#f50707" }}
        >“</span>The best images are the ones that can maintain their strength
          and have an impact for years, regardless of
          how many times they are viewed.<span style={{ color: "#f50707" }}
          >”</span></i></h3>
      </div>
      <RecentWorks />
    </div>
  );
};
export default HeroSection;