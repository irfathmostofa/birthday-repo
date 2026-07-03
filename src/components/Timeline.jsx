import { motion } from "framer-motion";
import "./Timeline.css";

export default function Timeline({ entries }) {
  return (
    <section className="timeline-section">
      <motion.p
        className="section-eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        moments worth remembering
      </motion.p>

      <div className="timeline-track">
        <div className="timeline-line" aria-hidden="true" />
        {entries.map((entry, i) => (
          <motion.div
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            key={entry.date + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-photo">
                {entry.image ? (
                  <img src={entry.image} alt={entry.caption} />
                ) : (
                  <span className="timeline-placeholder">✧</span>
                )}
              </div>
              <p className="timeline-date">{entry.date}</p>
              <p className="timeline-caption">{entry.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
