import { useMemo } from "react";
import "./Ambience.css";

import image1 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.59 PM.jpeg";
import image2 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.58 PM.jpeg";
import image3 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.58 PM (2).jpeg";
import image4 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.58 PM (1).jpeg";
import image5 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.57 PM.jpeg";
import image6 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.57 PM (2).jpeg";
import image7 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.57 PM (1).jpeg";
import image8 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.56 PM.jpeg";
import image9 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.56 PM (1).jpeg";
import image10 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.55 PM.jpeg";
import image11 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.54 PM.jpeg";
import image12 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.54 PM (1).jpeg";
import image13 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.53 PM.jpeg";
import image14 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.53 PM (2).jpeg";
import image15 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.53 PM (1).jpeg";
import image16 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.52 PM.jpeg";
import image17 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.52 PM (2).jpeg";
import image18 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.52 PM (1).jpeg";
import image19 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.51 PM.jpeg";
import image20 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.51 PM (2).jpeg";
import image21 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.51 PM (1).jpeg";
import image22 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.50 PM.jpeg";
import image23 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.50 PM (2).jpeg";
import image24 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.50 PM (1).jpeg";
import image25 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.49 PM.jpeg";
import image26 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.49 PM (2).jpeg";
import image27 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.49 PM (1).jpeg";
import image28 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.48 PM.jpeg";
import image29 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.09.48 PM (1).jpeg";
import image30 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.43.53 PM.jpeg";
import image31 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.43.54 PM.jpeg";
import image32 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.13.15 PM.jpeg";
import image33 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.13.15 PM (1).jpeg";
import image34 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 8.13.16 PM.jpeg";
import image35 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 9.00.53 PM.jpeg";
import image36 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 9.00.56 PM (1).jpeg";
import image37 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 9.00.56 PM (2).jpeg";
import image38 from "../../src/assets/images/WhatsApp Image 2026-07-03 at 9.00.56 PM.jpeg";

const ALL_PHOTOS = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9,
  image10, image11, image12, image13, image14, image15, image16, image17,
  image18, image19, image20, image21, image22, image23, image24, image25,
  image26, image27, image28, image29, image30, image31, image32, image33,
  image34, image35, image36, image37, image38,
];

export default function Ambience() {
  // Every photo gets its own falling lane — natural aspect ratio,
  // width varies slightly so the rain doesn't feel mechanical.
  const fallingPhotos = useMemo(
    () =>
      ALL_PHOTOS.map((image, i) => ({
        id: i,
        image,
        left: Math.random() * 96, // keep off the very edge
        width: 70 + Math.random() * 60,
        rotate: -12 + Math.random() * 24,
        duration: 26 + Math.random() * 18, // 26–44s per fall
        delay: -(Math.random() * 40), // negative delay staggers start mid-fall
        drift: (Math.random() - 0.5) * 80,
      })),
    [],
  );

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
    [],
  );

  return (
    <div className="ambience" aria-hidden="true">
      {/* <div className="falling-memories">
        {fallingPhotos.map((photo) => (
          <img
            key={photo.id}
            src={photo.image}
            alt=""
            className="memory-photo"
            style={{
              left: `${photo.left}%`,
              width: `${photo.width}px`,
              "--rotate": `${photo.rotate}deg`,
              "--drift": `${photo.drift}px`,
              animationDuration: `${photo.duration}s`,
              animationDelay: `${photo.delay}s`,
            }}
          />
        ))}
      </div> */}
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