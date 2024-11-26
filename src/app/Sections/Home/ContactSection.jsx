import styles from "../../styles/Home.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <h2>Have A Project in Your Mind?</h2>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
