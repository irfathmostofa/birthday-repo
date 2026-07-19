// ── EDIT EVERYTHING HERE ──────────────────────────────────────────────
// Demo / marketing version — generic placeholder content + themed stock
// images. Swap HER_NAME, MESSAGE, TIMELINE and GALLERY for a real
// couple's story when you're showing this as a live template.
//
// IMAGE SOURCE: LoremFlickr (loremflickr.com) — a free, no-API-key image
// placeholder service that pulls real tagged photos (unlike picsum, you
// can target keywords like "couple", "romance", "wedding", etc). The
// `?lock=N` param pins a specific photo per URL so the same slot always
// shows the same image on reload, instead of rotating randomly.
// If you ever want a specific photo instead of a themed random one, swap
// the URL for a direct images.unsplash.com/photo-<id> link — same drill:
// find a photo on unsplash.com, right-click → "copy image address".

export const HER_NAME = "Love"; // shown on the envelope + throughout

// The exact moment the surprise unlocks (local time, 24hr format).
export const TARGET_DATE = "2025-08-01 00:00:00";

export const MESSAGE = `To the one who makes every ordinary day feel like something worth remembering —

HAPPY BIRTHDAY!

Words never quite capture it, but here's an attempt: you make the small moments matter, and the big moments unforgettable.

Every year with you has been a chapter I didn't know I needed. And now that you're here, I don't want to miss a single page.

I wish for you today:
Mornings that make you smile
Evenings that bring you peace
Nights that wrap you in warmth

But most of all — know that you are enough. More than enough. You are everything.

Enjoy your day, celebrate yourself, and know that somewhere out there, someone is celebrating you with their whole heart.

Happy Birthday`;

export const SIGNATURE = `Always yours,
— The luckiest person to have you`;

const img = (tags, lock) =>
  `https://loremflickr.com/800/600/${tags}?lock=${lock}`;

export const TIMELINE = [
  {
    date: "The First Hello",
    caption: "The day two strangers became the start of something.",
    image: img("couple,meeting", 101),
  },
  {
    date: "The First Conversation",
    caption: "A small moment that quietly started everything.",
    image: img("couple,coffee", 102),
  },
  {
    date: "The First Laugh",
    caption: "Sharing smiles over something completely silly.",
    image: img("couple,laughing", 103),
  },
  {
    date: "The First Adventure",
    caption: "Getting a little lost together, and loving it.",
    image: img("couple,hiking", 104),
  },
  {
    date: "The Quiet Evenings",
    caption: "Long walks and even longer conversations.",
    image: img("couple,walking,sunset", 105),
  },
  {
    date: "The First Trip",
    caption: "New places, familiar comfort.",
    image: img("couple,travel", 106),
  },
  {
    date: "The Rainy Day",
    caption: "The kind of weather that somehow made it better.",
    image: img("couple,rain,umbrella", 107),
  },
  {
    date: "The Little Things",
    caption: "A flower, a note, a moment that meant more than it should have.",
    image: img("flowers,bouquet", 108),
  },
  {
    date: "The Promise",
    caption: "A tiny symbol carrying a piece of the heart.",
    image: img("wedding,rings", 109),
  },
  {
    date: "Today",
    caption:
      "Every memory brought us here — and there are so many more still to make.",
    image: img("couple,love", 110),
  },
];

export const GALLERY = [
  {
    image: img("couple,candid", 201),
    caption: "Candid, unposed, unforgettable.",
  },
  {
    image: img("couple,beach", 202),
    caption: "That trip we still talk about.",
  },
  {
    image: img("couple,dinner", 203),
    caption: "Trying something new, just for the memory.",
  },
  {
    image: img("couple,city,night", 204),
    caption: "Evenings that turned into hours.",
  },
  {
    image: img("couple,park", 205),
    caption: "An ordinary afternoon, made unforgettable.",
  },
  {
    image: img("couple,picnic", 206),
    caption: "Good food, better company.",
  },
  {
    image: img("couple,holdinghands", 207),
    caption: "Never quite letting go.",
  },
  {
    image: img("couple,dancing", 208),
    caption: "Two left feet, one perfect night.",
  },
  {
    image: img("couple,portrait", 209),
    caption: "That look, again.",
  },
  {
    image: img("couple,sunset,silhouette", 210),
    caption: "Every ending felt like a beginning with you.",
  },
];

// Final line shown after the letter, before the closing.
export const CLOSING_LINE = "Here's to celebrating you today, and always.";
