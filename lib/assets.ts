/**
 * Curated visual assets for BinaryBonds marketing site.
 * Sourced from Pexels (Creative Commons 0). Photographer credits below.
 *
 * Selection brief:
 *  - Warm or institutional tones (no neon, no millennial pastel)
 *  - Editorial restraint over stock-y obviousness
 *  - Indian-context where possible (Mumbai skyline, rupee, ledger)
 *
 * To re-curate, run: PEXELS_KEY=… node scripts/curate-pexels.mjs
 */

export const HERO_VIDEO = {
  // City skyline aerial — atmospheric night cityscape
  src: "https://videos.pexels.com/video-files/12685044/12685044-hd_1920_1080_30fps.mp4",
  poster:
    "https://images.pexels.com/photos/2287335/pexels-photo-2287335.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2400&h=1350",
  posterAlt: "Mumbai skyline at night, illuminated skyscrapers reflecting on water",
  credit: "Pexels (poster: Aleksandar Pasaric · video: Tom Fisk)",
};

export const SECTION_IMAGES = {
  /** Black-and-white macro of Indian rupee notes — manifesto / fees pillar */
  rupee_macro: {
    src: "https://images.pexels.com/photos/21300483/pexels-photo-21300483.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=1000",
    alt: "Detailed black and white macro shot of scattered Indian rupee notes",
    photographer: "Sandeep Singh",
  },
  /** Trading screen close-up — math pillar */
  trading_screen: {
    src: "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=1000",
    alt: "Close-up of stock market trading screen displaying financial data",
    photographer: "Tima Miroshnichenko",
  },
  /** 19th-century handwritten ledger — research pillar */
  ledger: {
    src: "https://images.pexels.com/photos/2355408/pexels-photo-2355408.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=1000",
    alt: "Detailed close-up of 19th-century handwritten financial documents",
    photographer: "Pixabay",
  },
  /** Mumbai sunset — CTA / closer */
  mumbai_sunset: {
    src: "https://images.pexels.com/photos/37573050/pexels-photo-37573050.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2400&h=1200",
    alt: "Sunset behind Mumbai's iconic Bandra-Worli Sea Link bridge",
    photographer: "Nitin Mishra",
  },
  /** Mumbai night skyline — pull quote backdrop */
  mumbai_night: {
    src: "https://images.pexels.com/photos/5414582/pexels-photo-5414582.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2400&h=1200",
    alt: "Captivating night view of Mumbai skyline with skyscrapers and lights",
    photographer: "Krishan Roopchand",
  },
  /** Architectural / institutional — about / trust */
  rashtrapati: {
    src: "https://images.pexels.com/photos/19883685/pexels-photo-19883685.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    alt: "Stunning view of Rashtrapati Bhavan with a clear sky in New Delhi",
    photographer: "Charanjit Singh",
  },
};

export const PRESS_LOGOS = [
  // Placeholder press strip — replace with real coverage when published
  { name: "The Economic Times" },
  { name: "Mint" },
  { name: "Bloomberg" },
  { name: "Moneycontrol" },
  { name: "Business Standard" },
  { name: "CNBC TV18" },
  { name: "The Hindu BL" },
  { name: "Outlook Money" },
];
