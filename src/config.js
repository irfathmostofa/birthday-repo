// ── EDIT EVERYTHING HERE ──────────────────────────────────────────────
// This is the only file you should need to touch to personalize the site.

export const HER_NAME = "Mahmoda"; // shown on the envelope + throughout

// The exact moment the surprise unlocks (local time, 24hr format).
// Before this moment, she'll only see a locked teaser screen with a
// countdown — the memories, gallery, and letter stay hidden until then.
// Format: "YYYY-MM-DDTHH:MM:SS"
export const TARGET_DATE = "2026-07-12";

export const MESSAGE = `Wishing a very Happy Birthday to the most amazing person in my life!
I hope this new year of your life brings you endless success, peace, and happiness.
Thank you for being such an incredible person in my life. Enjoy your special day!`;

export const SIGNATURE = "— someone who's grateful for you";

// Timeline of memories, in chronological order. Add, remove, or edit as
// many as you like — the layout handles any number gracefully.
// image: leave as null to show an elegant placeholder, or set to an
// imported image (see the commented example below).
//
// import photo1 from "./assets/photo1.jpg";
// { date: "March 2023", caption: "Where it all began", image: photo1 }

export const TIMELINE = [
  {
    date: "January 19, 2024",
    caption: "Our first conversation, at the university library",
    image: null,
  },
  { date: "Add a date", caption: "Add a memory here", image: null },
  { date: "Add a date", caption: "Add a memory here", image: null },
  { date: "Add a date", caption: "Add a memory here", image: null },
  { date: "Add a date", caption: "Add a memory here", image: null },
  { date: "Add a date", caption: "Add a memory here", image: null },
  { date: "Add a date", caption: "Add a memory here", image: null },
  {
    date: "Today",
    caption: "Still one of the most important people in my life",
    image: null,
  },
];

// Gallery photos. Same rule — leave image: null for a placeholder card.
export const GALLERY = [
  { image: null, caption: "" },
  { image: null, caption: "" },
  { image: null, caption: "" },
  { image: null, caption: "" },
  { image: null, caption: "" },
  { image: null, caption: "" },
];

// Final line shown after the letter, before the closing.
export const CLOSING_LINE = "Here's to celebrating you today, and always.";
