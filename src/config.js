// ── EDIT EVERYTHING HERE ──────────────────────────────────────────────
// Demo / marketing version — a 20-step story-arc timeline (meeting →
// today) with Bangla captions, so it feels like an actual love story
// unfolding instead of a random list of moments. Swap HER_NAME, MESSAGE,
// TIMELINE and GALLERY for a real couple's story when showing this live.
//
// IMAGE SOURCE: LoremFlickr (loremflickr.com) — free, no API key, pulls
// real tagged photos by keyword. `?lock=N` pins one photo per slot so it
// doesn't rotate on reload. Swap any URL for a direct
// images.unsplash.com/photo-<id> link if you want a specific photo.

export const HER_NAME = "ভালোবাসা"; // shown on the envelope + throughout

// The exact moment the surprise unlocks (local time, 24hr format).
export const TARGET_DATE = "2025-08-01 00:00:00";

export const MESSAGE = `যাকে ছাড়া আজকাল একটা দিনও পুরোপুরি মনে হয় না —

শুভ জন্মদিন!

এসব কথা মুখে বলতে আমার একটু আনইজি লাগে, তাই ভাবলাম বলার বদলে বানিয়েই ফেলি কিছু একটা। এখানে যে ছোট ছোট মুহূর্তগুলো আছে, সেগুলো হয়তো তখন খুব সাধারণ মনে হয়েছিল — কিন্তু এখন পেছনে ফিরে তাকালে বোঝা যায়, ওগুলোই আসলে আমাদের গল্পটা বানিয়েছে।

তোমার সেই হাসিটার জন্য ধন্যবাদ যেটা আমার সবচেয়ে খারাপ দিনটাকেও ঠিক করে দেয়। কোনো কারণ ছাড়াই মাঝদুপুরে পাঠানো মেসেজগুলোর জন্য। আর একদম সাধারণ একটা মঙ্গলবারকেও স্পেশাল বানিয়ে ফেলার জন্য।

আজকের দিনে চাই —
তোমার সকালগুলো হোক হালকা আর হাসিমাখা
সন্ধ্যাগুলো হোক নিশ্চিন্ত
আর চারপাশের মানুষগুলো যেন তোমাকে মনে করিয়ে দেয় তুমি কতটা ভালোবাসার যোগ্য

কিন্তু সবচেয়ে বেশি চাই, তুমি যেন বোঝো — এটা প্রমাণ করার কিছু নেই। তুমি এমনিতেই যথেষ্ট।

শুভ জন্মদিন। আরও অনেক এমন সাধারণ দিনের অপেক্ষায়, যেগুলো তোমার সাথে কখনো সাধারণ মনে হয় না।`;

export const SIGNATURE = `সবসময় তোমার,
— যে সবচেয়ে ভাগ্যবান`;

const img = (tags, lock) =>
  `https://loremflickr.com/800/600/${tags}?lock=${lock}`;

export const TIMELINE = [
  {
    date: "প্রথম দেখা",
    caption: "প্রথমবার তোমাকে দেখেই মনে হয়েছিল, কিছু একটা বদলে যাচ্ছে।",
    image: img("couple,meeting", 9),
  },
  {
    date: "প্রথম মেসেজ",
    caption: "কতবার লিখে-মুছে তারপর পাঠিয়েছিলাম, সেটা শুধু আমিই জানি।",
    image: img("phone,texting", 102),
  },
  {
    date: "থামতে না চাওয়া কথা",
    caption: "কথা শুরু হলো, আর থামারই নাম নেই।",
    image: img("couple,coffee,talking", 103),
  },
  {
    date: "প্রথম হাসি",
    caption: "কী নিয়ে হাসছিলাম মনে নেই, কিন্তু হাসিটা এখনো মনে আছে।",
    image: img("couple,laughing", 1044),
  },
  {
    date: "রাত জাগা আড্ডা",
    caption: "ঘুম হারাম হওয়া রাতগুলোর জন্য কোনো আফসোস নেই।",
    image: img("phone,night,bed", 105),
  },
  {
    date: "দেখা করার আগের নার্ভাসনেস",
    caption: "হাত ঘামছিল, তবু যেতে ইচ্ছে করছিল খুব করে।",
    image: img("waiting,cafe,nervous", 106),
  },
  {
    date: "প্রথমবার বের হওয়া",
    caption: "কোথায় যাব ঠিক ছিল না, শুধু তোমার পাশে থাকাটাই ঠিক ছিল।",
    image: img("couple,walking,street", 107),
  },
  {
    date: "প্রথম ছোট্ট ঝগড়া",
    caption: "রাগ হয়েছিল, তবু সেটাও পরে গল্প হয়ে গেল।",
    image: img("couple,talking,serious", 108),
  },
  {
    date: "মিটমাট",
    caption: '"স্যরি" বলাটা কঠিন ছিল না, কারণ ওপাশে তুমি ছিলে।',
    image: img("couple,handholding", 109),
  },
  {
    date: "বৃষ্টিভেজা দিন",
    caption: "দুজনেই ভিজে গিয়েছিলাম, তবু দিনটা এখনো প্রিয়।",
    image: img("couple,rain,umbrella", 110),
  },
  {
    date: "ছোট্ট উপহার",
    caption: "দামি কিছু ছিল না, কিন্তু মনে রাখার মতো ছিল।",
    image: img("flowers,gift", 111),
  },
  {
    date: "বন্ধুদের সাথে পরিচয়",
    caption: 'সবাই বলেছিল, "তোদের বেশ মানায়।"',
    image: img("friends,group,laughing", 112),
  },
  {
    date: "প্রথম ভ্রমণ",
    caption: "জায়গাটা নতুন ছিল, তবে পাশের মানুষটা চেনা — আর সেটাই যথেষ্ট ছিল।",
    image: img("couple,travel,adventure", 113),
  },
  {
    date: "উৎসবের দিন",
    caption: "উৎসবের আনন্দ তোমার পাশে থেকে যেন দ্বিগুণ হয়ে যেত।",
    image: img("festival,lights,celebration", 114),
  },
  {
    date: "কঠিন একটা সময়",
    caption: "সবকিছু ঠিক ছিল না, কিন্তু তুমি পাশ থেকে সরে যাওনি।",
    image: img("couple,comfort,hug", 115),
  },
  {
    date: "না বলেও বোঝা",
    caption: "একটা কথাও না বলে একে অপরকে বুঝে ফেলার অদ্ভুত ক্ষমতা।",
    image: img("couple,quiet,together", 116),
  },
  {
    date: "একটা শান্ত প্রতিশ্রুতি",
    caption: 'বড় কোনো ঘোষণা ছিল না, শুধু একটা শান্ত "আমি আছি।"',
    image: img("rings,hands,couple", 117),
  },
  {
    date: "দূরত্ব সামলানো",
    caption: "দূরে থেকেও কাছে থাকার একটা লড়াই চলেছিল দুজনেরই তরফ থেকে।",
    image: img("videocall,laptop,talking", 118),
  },
  {
    date: "একসাথে বড় হওয়া",
    caption: "দুজনেই বদলেছি অনেকটা, তবু পাশাপাশি হাঁটাটা থামেনি।",
    image: img("couple,walking,sunset", 119),
  },
  {
    date: "আজ",
    caption:
      "এই ছোট ছোট মুহূর্তগুলোই আজকের দিনটা বানিয়েছে — আর সামনে আরও অনেক বাকি।",
    image: img("couple,love,together", 120),
  },
];

export const GALLERY = [
  {
    image: img("couple,candid,laughing", 201),
    caption: "যে ছবিটা তুমি ডিলিট করতে বলেছিলে। করিনি।",
  },
  {
    image: img("couple,beach,sunset", 202),
    caption: "সেই ট্রিপটা, যেটা নিয়ে আজও হুট করে কথা ওঠে।",
  },
  {
    image: img("couple,dinner,restaurant", 203),
    caption: "দরকারের চেয়ে বেশি খাবার অর্ডার করে ফেলা, কোনো আফসোস ছাড়াই।",
  },
  {
    image: img("couple,city,night,lights", 204),
    caption: "১০ মিনিটের হাঁটা যেটা ঘণ্টা পেরিয়ে গিয়েছিল।",
  },
  {
    image: img("couple,park,bench", 205),
    caption: "কিছুই না করে বসে থাকা, তাও পুরোপুরি ঠিকঠাক লাগছিল।",
  },
  {
    image: img("couple,picnic,outdoors", 206),
    caption: "পিকনিকের অর্ধেক জিনিসই ভুলে যাওয়া, তবু মজাটা কমেনি।",
  },
  {
    image: img("couple,holdinghands,walking", 207),
    caption: "না ভেবেই হাত ধরে ফেলাটা এখন অভ্যাস হয়ে গেছে।",
  },
  {
    image: img("couple,dancing,kitchen", 208),
    caption: "রান্নাঘরে বাজে নাচ, তবু গানটা এখনো মনে আছে।",
  },
  {
    image: img("couple,portrait,smiling", 209),
    caption: "আমি কিছু একটা বোকার মতো বললেই তুমি ঠিক এই লুকটা দাও।",
  },
  {
    image: img("couple,silhouette,sunset", 210),
    caption: "এরপর থেকে প্রতিটা সূর্যাস্তেই এই মুহূর্তটার কথা মনে পড়ে।",
  },
];

// Final line shown after the letter, before the closing.
export const CLOSING_LINE = "আজকের দিনটা তোমার জন্য, আর প্রতিটা দিনও।";
