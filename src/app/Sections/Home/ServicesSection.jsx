import styles from "../../styles/Home.module.css";

export default function ServicesSection() {
  const services = [
    { image: "/service1.jpg", title: "Wedding Photography" },
    { image: "/service2.jpg", title: "Portrait Photography" },
    { image: "/service3.jpg", title: "Newborn Photography" },
  ];

  return (
    <section className={styles.servicesSection}>
      <h2>Our Perfect Services</h2>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
