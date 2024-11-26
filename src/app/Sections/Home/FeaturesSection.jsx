import styles from "../../styles/Home.module.css";

export default function FeaturesSection() {
  const features = [
    { title: "Creative Photography", description: "Artistic and unique", icon: "🎨" },
    { title: "High-Quality Images", description: "Crystal-clear results", icon: "📸" },
    { title: "Professional Team", description: "Experienced photographers", icon: "👨‍💻" },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
