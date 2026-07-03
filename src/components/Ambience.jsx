import { useMemo } from "react";
import "./Ambience.css";

// A quiet field of drifting gold motes — restrained, not confetti.
export default function Ambience() {
  const motes = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 16 + Math.random() * 14,
        size: 2 + Math.random() * 3,
        drift: (Math.random() - 0.5) * 60,
      })),
    []
  );

  return (
    <div className="ambience" aria-hidden="true">
      {motes.map((m) => (
        <span
          key={m.id}
          className="mote"
          style={{
            left: `${m.left}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            "--drift": `${m.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
