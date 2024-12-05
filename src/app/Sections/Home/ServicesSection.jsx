import { cormorantFont, montserratFont } from "@/app/fonts/fonts";
import "./Intro.css";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Wedding Photography",
      description:
        "Preserving the beauty and emotion of your wedding day with artistry and passion.",
      icon: "🤵‍♀️👰",
      link: "#",
    },
    {
      id: 2,
      title: "Pre-Wedding Photography",
      description:
        "Capturing the anticipation and joy of your love story before the big day with creativity and style.",
      icon: "📸",
      link: "#",
    },
    {
      id: 3,
      title: "Maternity Photography",
      description:
        "Celebrating the beauty and wonder of motherhood, capturing moments of love and expectation.",
      icon: "🤰",
      link: "#",
    },
    {
      id: 4,
      title: "Baby Photography",
      description:
        "Preserving the innocence and charm of your newborn's first days with tender, heartfelt photography.",
      icon: "👶",
      link: "#",
    },
  ];

  return (
    <section>
      <h2>Our Perfect Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div className="overlapping-cards-container cards-container" key={service.id}>
            {/* First Card */}
            <div className="card-first">

              {/* Second Card */}
              <div className="card-second">

                <div className="card-icon">{service.icon}</div>
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
    </section>
  );
}
