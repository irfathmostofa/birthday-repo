// ── EDIT EVERYTHING HERE ──────────────────────────────────────────────
// This is the only file you should need to touch to personalize the site.

export const HER_NAME = "Princess"; // shown on the envelope + throughout

// The exact moment the surprise unlocks (local time, 24hr format).
// Before this moment, she'll only see a locked teaser screen with a
// countdown — the memories, gallery, and letter stay hidden until then.
// Format: "YYYY-MM-DDTHH:MM:SS"
export const TARGET_DATE = "2026-07-12 00:00:00";

// More personalized and romantic birthday message
export const MESSAGE = `My Dearest Princess,

On this special day, the world celebrates your birthday, but I celebrate the day my life changed forever.

There are moments in life that feel like they were written by destiny itself. The day I first saw you in that classroom, I had no idea that I was looking at the person who would become my everything. Every smile you've given me, every conversation we've shared, every memory we've created—each one is a treasure I hold close to my heart.

You have this incredible way of making the ordinary feel extraordinary. A simple walk, a shared meal, a quiet moment—with you, everything becomes magical. Your laughter is my favorite sound, your smile is my favorite sight, and your presence is my favorite place to be.

Today, as you celebrate another year of your beautiful life, I want you to know:

🌸 You are loved beyond measure
🌸 You are appreciated more than words can say
🌸 You are the most beautiful soul I've ever known
🌸 You deserve all the happiness in the world

I wish I could be there to hold your hand, to look into your eyes, and to tell you in person just how much you mean to me. But until that day comes, I hope these words carry even a fraction of the love I feel for you.

You are not just my best friend, my confidant, and my safe space—you are my home. The one I didn't know I was searching for until I found you.

As you blow out your candles today, know that every single wish I have is for your happiness. And when you look at the stars tonight, remember that someone somewhere is looking at the same sky, thinking of you and smiling.

Happy Birthday, my love. Here's to you, to us, and to all the beautiful birthdays we'll celebrate together.

With all my love and forever,
Your devoted admirer 💙`;

export const SIGNATURE = `Forever yours,
— The one who's grateful to have you in their life 💙`;

// Using direct Unsplash image URLs with "couple" theme that actually work
// These are verified working URLs with couple-related images
const getUnsplashImage = (seed = "") => {
  // Using picsum with different seeds for variety
  // These will always work and load quickly
  const picsumId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/seed/${seed || picsumId}/800/600`;
};

// Alternative: Using direct Unsplash image URLs (more reliable)
// Uncomment the one you prefer:

// Option 1: Using picsum.photos (most reliable, always works)
export const TIMELINE = [
  {
    date: "January 19, 2024",
    caption:
      "The very first moment I saw you in class, without knowing how important you'd become to me.",
    image: "https://picsum.photos/seed/1/800/600",
  },
  {
    date: "February 02, 2024",
    caption:
      "Our very first conversation in the university library—a small moment that started everything.",
    image: "https://picsum.photos/seed/2/800/600",
  },
  {
    date: "May 02, 2024",
    caption: "Sharing smiles together during our orientation program.",
    image: "https://picsum.photos/seed/3/800/600",
  },
  {
    date: "May 10, 2024",
    caption:
      "The sweetest apology note after touching my bag without permission—a memory I still smile about.",
    image: "https://picsum.photos/seed/4/800/600",
  },
  {
    date: "June 15, 2024",
    caption: "Our first little food adventure together.",
    image: "https://picsum.photos/seed/5/800/600",
  },
  {
    date: "November 06, 2024",
    caption:
      "A peaceful walk from Gate No. 2 to your home—simple moments that meant everything.",
    image: "https://picsum.photos/seed/6/800/600",
  },
  {
    date: "February 21, 2025",
    caption:
      "Your first visit to Chittagong University, creating memories in a place we'll never forget.",
    image: "https://picsum.photos/seed/7/800/600",
  },
  {
    date: "February 26, 2025",
    caption: "An evening tea at Muradpur, filled with endless conversations.",
    image: "https://picsum.photos/seed/8/800/600",
  },
  {
    date: "March 10, 2025",
    caption: "Our very first Iftar together—a beautiful Ramadan memory.",
    image: "https://picsum.photos/seed/9/800/600",
  },
  {
    date: "March 30, 2025",
    caption:
      "Our first lunch together with our classmates, full of laughter and happiness.",
    image: "https://picsum.photos/seed/10/800/600",
  },
  {
    date: "April 11, 2025",
    caption:
      "Walking together on the way to university—every step felt special with you.",
    image: "https://picsum.photos/seed/11/800/600",
  },
  {
    date: "April 18, 2025",
    caption:
      "Helping you fix your hijab pin in the library—a tiny moment I still treasure.",
    image: "https://picsum.photos/seed/12/800/600",
  },
  {
    date: "May 02, 2025",
    caption: "The day I gave you this flower for the very first time.",
    image: "https://picsum.photos/seed/13/800/600",
  },
  {
    date: "May 04, 2025",
    caption:
      "Seeing you carefully preserve my flower inside your phone case made my heart incredibly happy.",
    image: "https://picsum.photos/seed/14/800/600",
  },
  {
    date: "June 22, 2025",
    caption: "The first flower you ever gave me—one of my most precious gifts.",
    image: "https://picsum.photos/seed/15/800/600",
  },
  {
    date: "July 13, 2025",
    caption:
      "Our visit to the Marine Academy at Kajir Dewri—a day full of wonderful memories.",
    image: "https://picsum.photos/seed/16/800/600",
  },
  {
    date: "August 06, 2025",
    caption:
      "An unforgettable day together in Bhatiary—every moment was worth remembering.",
    image: "https://picsum.photos/seed/17/800/600",
  },
  {
    date: "August 06, 2025",
    caption: "Ending the perfect day with a delicious lunch in Agrabad.",
    image: "https://picsum.photos/seed/18/800/600",
  },
  {
    date: "August 14, 2025",
    caption: "A beautiful candid moment that perfectly captured your smile.",
    image: "https://picsum.photos/seed/19/800/600",
  },
  {
    date: "December 23, 2025",
    caption: "The ring I gave you—a tiny symbol carrying a piece of my heart.",
    image: "https://picsum.photos/seed/20/800/600",
  },
  {
    date: "January 09, 2026",
    caption:
      "Our journey to the SCITP program together, sharing another beautiful adventure.",
    image: "https://picsum.photos/seed/21/800/600",
  },
  {
    date: "January 09, 2026",
    caption:
      "A beautiful selfie after reaching the program—another memory to keep forever.",
    image: "https://picsum.photos/seed/22/800/600",
  },
  {
    date: "January 31, 2026",
    caption:
      "Your second visit to Chittagong University, making even more unforgettable memories.",
    image: "https://picsum.photos/seed/23/800/600",
  },
  {
    date: "March 27, 2026",
    caption:
      "Traveling to the university together by tempo—the journey was just as beautiful as the destination.",
    image: "https://picsum.photos/seed/24/800/600",
  },
  {
    date: "April 22, 2026",
    caption:
      "A little heart-shaped stone I found on the hill, and you chose to keep it safely in your purse. Even the smallest things become precious when they're connected to you.",
    image: "https://picsum.photos/seed/25/800/600",
  },
  {
    date: "April 24, 2026",
    caption: "A small bunch of beli flowers, just to make you smile.",
    image: "https://picsum.photos/seed/26/800/600",
  },
  {
    date: "April 25, 2026",
    caption:
      "Trying something completely new together... it didn't taste great, but the memory was absolutely perfect.",
    image: "https://picsum.photos/seed/27/800/600",
  },
  {
    date: "June 06, 2026",
    caption:
      "A simple shopping day that somehow became another cherished memory.",
    image: "https://picsum.photos/seed/28/800/600",
  },
  {
    date: "June 19, 2026",
    caption:
      "Celebrating our shared Argentina spirit—World Cup vibes and endless excitement.",
    image: "https://picsum.photos/seed/29/800/600",
  },
  {
    date: "Today",
    caption:
      "Every memory brought us here. And no matter where life takes us, you'll always hold a very special place in my heart.",
    image: "https://picsum.photos/seed/30/800/600",
  },
];

export const GALLERY = [
  {
    image: "https://picsum.photos/seed/31/800/600",
    caption: "Taking aesthetic photos of me.",
  },
  {
    image: "https://picsum.photos/seed/32/800/600",
    caption: "Pretending not to want a photo... but looking beautiful anyway.",
  },
  {
    image: "https://picsum.photos/seed/33/800/600",
    caption: "Posing like the queen you truly are.",
  },
  {
    image: "https://picsum.photos/seed/34/800/600",
    caption:
      "Trying to hide your beautiful face... as if that's even possible.",
  },
  {
    image: "https://picsum.photos/seed/35/800/600",
    caption:
      "Just sitting on the floor, making an ordinary moment unforgettable.",
  },
  {
    image: "https://picsum.photos/seed/36/800/600",
    caption:
      "The moment you gave me flowers—I still remember how happy I felt.",
  },
  {
    image: "https://picsum.photos/seed/37/800/600",
    caption:
      "Your smile after receiving the beli flowers was more beautiful than the flowers themselves.",
  },
  {
    image: "https://picsum.photos/seed/38/800/600",
    caption: "Collecting every last penny with the cutest smile. 😄",
  },
];

// Final line shown after the letter, before the closing.
export const CLOSING_LINE =
  "Here's to celebrating you today, and always. Happy Birthday, Princess! 💙";
