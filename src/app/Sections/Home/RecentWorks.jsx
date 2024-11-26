import styles from "../../styles/Home.module.css";

export default function RecentWorks() {
  const works = [
    { image: "/work1.jpg", title: "Wedding Shoot" },
    { image: "/work2.jpg", title: "Engagement Session" },
    { image: "/work3.jpg", title: "Outdoor Photography" },
  ];

  return (
    <section className={styles.recentWorksSection}>
      <h2>Recent Works</h2>
      <div className={styles.workGrid}>
        {works.map((work, index) => (
          <div key={index} className={styles.workCard}>
            <img src={work.image} alt={work.title} />
            <h3>{work.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
