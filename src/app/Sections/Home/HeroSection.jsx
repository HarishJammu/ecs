// 'use client';

// import React, { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules'; // Import modules from the updated location
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// export default function HeroSection() {
//   const swiperRef = useRef(null); // Create a reference for the Swiper instance
//   const images = [
//     'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730513/fantasy-couple-getting-married1_c0wcib.png',
//     'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730512/fantasy-couple-getting-married2_jv1fqi.png',
//     'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730505/fantasy-couple-getting-married_eccnfm.png',
//     'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730501/fantasy-couple-getting-married3_hld2v0.png',
//     'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730500/fantasy-couple-getting-married4_bmdzcy.png',
//   ];

//   const [showCategory, setShowCategory] = useState(false);
//   const [showAbout, setShowAbout] = useState(false);

//   return (
//     <div className="carousel-container">
//       {/* Swiper Carousel */}
//       {/* <Swiper
//         loop={true}
//         modules={[Navigation, Pagination]} // Add Autoplay here
//         navigation={{
//           nextEl: '.next-button',
//           prevEl: '.prev-button',
//         }}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000 }}
//         spaceBetween={0}
//         slidesPerView={1}
//         speed={800}
//         className="custom-swiper"
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div className="carousel-slide">
//               <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper> */}

//       {/* Custom Navigation Buttons */}
//       <div className="custom-navigation">
//         <button className="prev-button">
//           <ChevronLeftIcon className="navigation-icon" />
//         </button>
//         <button className="next-button">
//           <ChevronRightIcon className="navigation-icon" />
//         </button>
//       </div>

//       {/* Buttons */}
//       <div className="fixed-buttons">
//         <button className="button" onClick={() => setShowCategory(true)}>
//           Category
//         </button>
//         <button className="button" onClick={() => setShowAbout(true)}>
//           About
//         </button>
//       </div>

//       {/* Category Overlay */}
//       {showCategory && (
//         <div className="overlay">
//           <div className="overlay-content">
//             <button className="close-button" onClick={() => setShowCategory(false)}>
//               Close
//             </button>
//             <h2>Category Page</h2>
//             <p>Content about categories goes here...</p>
//           </div>
//         </div>
//       )}

//       {/* About Overlay */}
//       {showAbout && (
//         <div className="overlay">
//           <div className="overlay-content">
//             <button className="close-button" onClick={() => setShowAbout(false)}>
//               Close
//             </button>
//             <h2>About Page</h2>
//             <p>Content about "About" goes here...</p>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .carousel-container {
//           position: relative;
//           width: 100%;
//           height: 90vh;
//         }

//         .carousel-slide {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100%;
//         }

//         .carousel-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .swiper-pagination-bullets {
//           bottom: 10px;
//         }

//         /* Custom Navigation Styles */
//         .custom-navigation {
//           position: absolute;
//           bottom: 30px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           justify-content: space-between;
//           flex-direction:row
//           width: 100px;
//           z-index:2
//         }

//         .prev-button,
//         .next-button {
//           border: none;
//           padding: 10px;
//           border-radius: 50%;
//           cursor: pointer;
//           transition: background-color 0.3s;
//         }

//         .prev-button:hover,
//         .next-button:hover {
//           background-color: rgba(0, 0, 0, 0.7);
//         }

//         .navigation-icon {
//           color: white;
//           width: 50px;
//           height: 50px;
//         }

//         .indexing-buttons {
//           position: absolute;
//           top: 50%;
//           right: 20px;
//           display: flex;
//           flex-direction: column;
//           z-index: 1;
//         }
//         .fixed-buttons {
//           position: absolute;
//           top: 50%;
//           right: 20px;
//           display: flex;
//           flex-direction: column;
//           z-index: 1;
//         }

//         .button {
//           padding: 10px 15px;
//           background-color: rgba(0, 0, 0, 0.7);
//           color: white;
//           border: none;
//           cursor: pointer;
//           transition: background 0.3s;
//         }

//         .button:hover {
//           background-color: rgba(0, 0, 0, 0.9);
//         }

//         /* Overlay Styles */
//         .overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.7);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 3;
//         }

//         .overlay-content {
//           background: white;
//           padding: 20px;
//           width: 80%;
//           max-width: 500px;
//           position: relative;
//         }

//         .close-button {
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           background: red;
//           color: white;
//           border: none;
//           cursor: pointer;
//         }
//       `}</style>
//     </div>
//   );
// }
'use client';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import "./Intro.css"
import { montserrat, mulish, syne, cormorant } from "../../utils/fonts";
const mulishFont = mulish.className;
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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);



  const openAbout = () => {
    alert('Open About Page');
  };

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);



  const closeCategory = () => {
    setIsCategoryOpen(false);
  };
  return (
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
      <div className="overlayButtons">

        <button onClick={() => setIsCategoryOpen(true)} className={`overlayButton ${mulishFont}`}>
          Category
        </button>

        <button onClick={openAbout} className={`overlayButton ${mulishFont}`}>
          About
        </button>
      </div>
      {isClient && isCategoryOpen && (
        <div className="categoryOverlay">
          <button onClick={closeCategory} className="closeButton">Close</button>
          <div className="container">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1">
                <Image
                  src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730513/fantasy-couple-getting-married1_c0wcib.png"
                  alt="Fashion"
                  width={400}
                  height={600}
                  className="rounded-lg"
                />
                <p className="text-center text-lg font-bold mt-4">01 Fashion</p>
              </div>
              <div className="col-span-1">
                <Image
                  src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730513/fantasy-couple-getting-married1_c0wcib.png"
                  alt="Lifestyle"
                  width={400}
                  height={600}
                  className="rounded-lg"
                />
                <p className="text-center text-lg font-bold mt-4 category-text">02 Lifestyle</p>
              </div>
              <div className="col-span-1">
                <Image
                  src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730513/fantasy-couple-getting-married1_c0wcib.png"
                  alt="Food"
                  width={400}
                  height={600}
                  className="rounded-lg"
                />
                <p className="text-center text-lg font-bold mt-4">03 Food</p>
              </div>
              <div className="col-span-1">
                <Image
                  src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732730513/fantasy-couple-getting-married1_c0wcib.png"
                  alt="Product"
                  width={400}
                  height={600}
                  className="rounded-lg"
                />
                <p className="text-center text-lg font-bold mt-4">04 Product</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="navButtons">
        <button onClick={handlePrev} className="navButton">
          <ChevronLeftIcon className="h-7 w-7 icons-color" />
        </button>
        <button onClick={handleNext} className="navButton">
          <ChevronRightIcon className="h-7 w-7 icons-color" />
        </button>
      </div>

    </div >
  )
}
export default HeroSection;