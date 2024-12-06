import { cormorantFont, montserratFont } from "@/app/fonts/fonts";
import "./Intro.css";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Wedding Photography",
      description:
        "Preserving the beauty and emotion of your wedding day with artistry and passion.",
      icon: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733509617/photography_t4prpl.png",
      link: "#",
    },
    {
      id: 2,
      title: "Pre-Wedding Photography",
      description:
        "Capturing the anticipation and joy of your love story before the big day with creativity and style.",
      icon: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733423698/photo_rflcwi.png",
      link: "#",
    },
    {
      id: 3,
      title: "Maternity Photography",
      description:
        "Celebrating the beauty and wonder of motherhood, capturing moments of love and expectation.",
      icon: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733423698/pregnant_2_lzpcsd.png",
      link: "#",
    },
    {
      id: 4,
      title: "Baby Photography",
      description:
        "Preserving the innocence and charm of your newborn's first days with tender, heartfelt photography.",
      icon: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733510726/newborn_ijs9t1.png",
      link: "#",
    },
  ];

  return (
    <div className="backgorund-service">
      <h1 className={`what-we-offer ${montserratFont}`} ><i>What we offer </i> </h1>
      <h2 className={`our-service-title ${montserratFont}`}>Our Perfect Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div className="overlapping-cards-container" key={service.id}>
            <div className="card-first">
              <div className="card-second">
                <img src={service.icon} className="card-icon" />
                <h2 className={`card-title ${cormorantFont}`}>{service.title}</h2>
                <p className={`card-description ${cormorantFont}`} >{service.description}</p>
                <a href={service.link} className="service-link">
                  Read More
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}
