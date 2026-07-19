import { motion } from "framer-motion";
import "./Countdown.css";

export default function Countdown({ time }) {
  const units = [
    { label: "days", value: time.days },
    { label: "hours", value: time.hours },
    { label: "minutes", value: time.minutes },
    { label: "seconds", value: time.seconds },
  ];

  return (
    <section className="countdown-section">
      <motion.p
        className="countdown-eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        অবশেষে সেই দিনটা চলে এলো
      </motion.p>

      <motion.h2
        className="countdown-arrived"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        শুভ জন্মদিন
      </motion.h2>
    </section>
  );
}
