import { mulishFont } from "@/app/fonts/fonts";
import "./Intro.css"
export default function AboutSection() {
  return (
    <div className="about-us-container">
      {/* Left Side Project Container */}
      <div className={`project-container ${mulishFont}`}>
        <h1 className="project-text">200+</h1>
        <h1 className="totalProject">PROJECTS</h1>
        <p className="description">
          Bringing creative ideas to life with passion and precision, ensuring client delight.
        </p>
      </div>

      {/* Main Card Section */}
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

      {/* Right Side Project Container */}
      <div className={`project-container-right ${mulishFont}`}>
        <h1 className="project-text">150+</h1>
        <h1 className="totalProject">HAPPY CLIENTS</h1>
        <p className={`description ${mulishFont}`}>
          Capturing moments that create lasting happiness for our clients.
        </p>
      </div>
    </div>

  );
}
