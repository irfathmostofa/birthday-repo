import { useEffect, useState } from "react";

function getRemaining(targetDate) {
  const total = new Date(targetDate).getTime() - Date.now();
  const clamped = Math.max(total, 0);
  return {
    total: clamped,
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function useCountdown(targetDate) {
  const [time, setTime] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return { ...time, arrived: time.total <= 0 };
}
