import "./Intro.css"
export default function AboutSection() {
  return (
    // <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
    //   <div className="max-w-6xl w-full flex flex-col items-center gap-8">
    //     {/* Title */}
    //     <div className="text-center">
    //       <h1 className="text-3xl font-bold text-gray-800">Our Achievements</h1>
    //     </div>

    //     {/* Cards Section */}
    //     <div className="flex flex-col md:flex-row gap-8">
    //       {/* Card 1 */}
    //       <div className="card-container">
    //         <div className="card-content">
    //           <div className="card-image">
    //             <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733331204/img-p-2_eqsqzq.jpg" alt="Couple Photography" />
    //           </div>
    //           <h2 className="text-2xl font-bold mt-4">205+</h2>
    //           <p className="text-lg font-medium text-gray-700">PROJECTS</p>
    //           <p className="text-center text-gray-500 mt-2">
    //             Bringing creative ideas to life with passion and precision,
    //             ensuring client delight.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Card 2 */}
    //       <div className="card-container">
    //         <div className="card-content">
    //           <div className="card-image">
    //             <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733331207/img-p-4_ctj4sy.jpg" alt="Photographer" />
    //           </div>
    //           <h2 className="text-2xl font-bold mt-4">150+</h2>
    //           <p className="text-lg font-medium text-gray-700">HAPPY CLIENTS</p>
    //           <p className="text-center text-gray-500 mt-2">
    //             Capturing moments that create lasting happiness for our clients.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Card 3 */}
    //       <div className="card-container">
    //         <div className="card-content">
    //           <div className="card-image">
    //             <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733331203/img-p-3_advppl.jpg" alt="Wedding Event" />
    //           </div>
    //           <h2 className="text-2xl font-bold mt-4">100+</h2>
    //           <p className="text-lg font-medium text-gray-700">EVENTS</p>
    //           <p className="text-center text-gray-500 mt-2">
    //             Crafting timeless memories with exceptional attention to detail.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>




    // <div className="about-ourservice-container">
    //   {/* Background Card Left */}
    //   <div className="about-ourservice-card cardBackground">
    //     <div className="image-container"> 
    //       <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733331203/img-p-3_advppl.jpg" alt="Background Left" className="backgound-card" />
    //     </div>

    //   </div>

    //   {/* Foreground Card */}
    //   {/* <div className="about-ourservice-card cardForeground">
    //     <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733331203/img-p-3_advppl.jpg" alt="Foreground" className="foreground-card" />

    //   </div> */}

    //   {/* Background Card Right */}
    //   <div className="about-ourservice-card cardBackground">
    //     {/* <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733331203/img-p-3_advppl.jpg" alt="Background Right" className="backgound-card" /> */}

    //   </div>
    // </div>


    <div className="about-ourservice-container">
      {/* Background Card Left */}
      <div className="about-ourservice-card-backgorund cardBackground-left">
        <div className="card-content-wrapper">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733331207/img-p-4_ctj4sy.jpg"
              alt="Background Left"
              className="background-card"
            />
          </div>
        </div>
      </div>

      {/* Foreground Card */}

      <div className="about-ourservice-card-foreground cardForeground">
        <div className="card-content-wrapper">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733331203/img-p-3_advppl.jpg"
              alt="Foreground"
              className="foreground-card"
            />
          </div>
        </div>
      </div>

      {/* Background Card Right */}
      <div className="about-ourservice-card-backgorund cardBackground-right">
        <div className="card-content-wrapper">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733331204/img-p-2_eqsqzq.jpg"
              alt="Background Right"
              className="background-card"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
