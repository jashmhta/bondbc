/**
 * Binary Bonds — Real Brand Content
 * Sourced from binarybonds.in (the actual production site).
 *
 * Brand positioning: institutional bond house & underwriting firm.
 * NOT a retail OBPP. Audience is banks, insurance companies, mutual
 * funds, pension funds, HNI family offices, NBFCs.
 */

export const BRAND = {
  name: "Binary Bonds",
  parent: "Binary Capital",
  parentEntity: "Binary Capital Advisors LLP",
  legalName: "Binary Capital Advisors LLP",
  tagline: "Building Trust with Strategic Bond Investments",
  subTagline: "Primary Market • Secondary Market • Underwriting",
  hero_subtitle:
    "Comprehensive Bond Market solutions for Institutional Investors, Banks, HNIs, Mutual Funds, and Insurance Companies, with a focus on risk assessment and regulatory compliance.",
  brandColor: "#1e3a8a", // theme-color from <meta>
  meta: {
    title:
      "Binary Bonds | India's Leading Bond Market Specialists | Primary & Secondary Markets",
    description:
      "Binary Bonds is India's premier bond market specialist offering comprehensive bond underwriting, primary market placements, secondary market trading, and debt capital market solutions. Trusted by 150+ institutional investors, banks, mutual funds & insurance companies. ₹2000Cr+ bonds underwritten. SEBI registered, RBI compliant. A division of Binary Capital.",
    keywords: [
      "Binary Bonds",
      "Binary Bonds India",
      "bond market specialists India",
      "bond underwriting India",
      "primary bond market India",
      "secondary bond market India",
      "corporate bond underwriting",
      "government securities trading",
      "debt capital markets",
      "bond placement services",
      "institutional bond trading",
      "G-Secs trading India",
      "treasury bonds India",
      "credit rating advisory",
      "bond portfolio management",
      "institutional investors bonds",
      "mutual fund bond services",
      "insurance company bonds",
      "HNI bond investments",
      "Mumbai bond market",
      "SEBI registered bonds",
      "RBI compliant trading",
    ],
  },
  contact: {
    phone: "+91 7738056127",
    email: "sales@binarycapital.in",
    hours: "Mon–Fri 9 AM – 6 PM IST",
    address: {
      line1: "2045, 2nd Floor, Spaces Adani Height",
      line2: "Andheri West, Mumbai, India",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      coords: "19.1197, 72.8464",
    },
  },
  cta: {
    primary: "Schedule Consultation",
    secondary: "Download Brochure",
    tertiary: "Buy Bonds",
  },
  trust: {
    rbi: "RBI Compliant",
    bank: "The Federal Bank Limited", // banking partner & demat services
    sebiNote: "SEBI registered, RBI compliant",
  },
  stats: [
    { value: 2000, prefix: "₹", suffix: "Cr+", label: "Bonds Underwritten" },
    { value: 150, suffix: "+", label: "Institutional Clients" },
    { value: 500, suffix: "+", label: "Bond Transactions Completed" },
    { value: "AAA", isText: true, label: "Rating Partners" },
  ],
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    slug: "corporate-bond-underwriting",
    title: "Corporate Bond Underwriting",
    summary:
      "Professional underwriting services for corporate debt securities with comprehensive risk assessment and pricing strategies.",
    bullets: ["Bond structuring", "Credit analysis", "Pricing advisory", "Placement services"],
    image: "/brand/service-corporate-bonds.jpg",
    detail:
      "Binary Bonds provides comprehensive corporate bond underwriting services, helping companies access debt capital markets efficiently while ensuring optimal pricing and successful placement with institutional investors.",
  },
  {
    slug: "government-securities",
    title: "Government Securities",
    summary:
      "Expert handling of government bonds and treasury securities with deep market knowledge and regulatory expertise.",
    bullets: ["Treasury bonds", "Municipal bonds", "Sovereign debt", "Auction participation"],
    image: "/brand/service-government-securities.jpg",
    detail:
      "Specialized expertise across central government securities (G-Secs), state development loans (SDLs), treasury bills, and municipal bonds — including auction participation, RBI primary dealer relationships, and yield-curve trading.",
  },
  {
    slug: "high-yield-bonds",
    title: "High-Yield Bonds",
    summary:
      "Specialized services for high-yield corporate bonds with enhanced due diligence and risk management protocols.",
    bullets: ["Credit evaluation", "Risk mitigation", "Market timing", "Investor matching"],
    image: "/brand/service-high-yield-bonds.jpg",
    detail:
      "We curate, underwrite and place high-yield bond opportunities — covering A, BBB, and unrated paper — with rigorous credit work and a defended placement universe of qualified institutional investors.",
  },
  {
    slug: "bond-portfolio-management",
    title: "Bond Portfolio Management",
    summary:
      "Strategic portfolio management services optimizing yield, duration, and credit quality for institutional investors.",
    bullets: [
      "Portfolio optimization",
      "Duration management",
      "Yield enhancement",
      "Rebalancing strategies",
    ],
    image: "/brand/service-portfolio-management.jpg",
    detail:
      "Discretionary and advisory portfolio management for institutional treasuries, family offices and pension funds — built on quantitative risk frameworks and proven across complete rate cycles.",
  },
  {
    slug: "credit-rating-advisory",
    title: "Credit Rating Advisory",
    summary:
      "Comprehensive credit rating advisory services to help issuers achieve optimal ratings and maintain investor confidence.",
    bullets: [
      "Rating preparation",
      "Agency coordination",
      "Documentation support",
      "Rating maintenance",
    ],
    image: "/brand/service-credit-rating.jpg",
    detail:
      "End-to-end advisory for first-time issuers and existing borrowers — preparing rating presentations, coordinating agency interactions, and managing the rating lifecycle to optimise borrowing cost.",
  },
  {
    slug: "secondary-market-trading",
    title: "Secondary Market Trading",
    summary:
      "Efficient secondary market trading services providing liquidity and competitive pricing for bond portfolios.",
    bullets: [
      "Market making",
      "Liquidity provision",
      "Price discovery",
      "Settlement services",
    ],
    image: "/brand/service-secondary-trading.jpg",
    detail:
      "Active market-making across listed and unlisted bonds. RFQ-based price discovery, deep institutional buy-side network, ICCL-settled trades, and same-day fund settlement for sell orders.",
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "Connect with our relationship manager to discuss your investment objectives, risk appetite, and portfolio requirements.",
    duration: "1–2 days",
  },
  {
    n: "02",
    title: "Market Analysis",
    body: "Our research team analyses market conditions, identifies suitable bond opportunities, and provides detailed credit assessments.",
    duration: "2–3 days",
  },
  {
    n: "03",
    title: "Proposal & Documentation",
    body: "Receive comprehensive proposals with pricing, terms, and risk analysis. Complete necessary documentation with our compliance team.",
    duration: "3–5 days",
  },
  {
    n: "04",
    title: "Execution & Settlement",
    body: "Swift execution of transactions with transparent pricing and efficient settlement through our trading desk.",
    duration: "1–2 days",
  },
  {
    n: "05",
    title: "Ongoing Support",
    body: "Continuous portfolio monitoring, market updates, and dedicated relationship management for all your bond investment needs.",
    duration: "Ongoing",
  },
];

export const WHY_CHOOSE = [
  {
    title: "Regulatory Excellence",
    body: "Full compliance with SEBI regulations and industry best practices, ensuring secure and transparent transactions.",
  },
  {
    title: "Market Expertise",
    body: "Deep understanding of primary and secondary bond markets with proven track record across economic cycles.",
  },
  {
    title: "Institutional Focus",
    body: "Specialized services tailored for banks, insurance companies, mutual funds, and high-net-worth individuals.",
  },
  {
    title: "Credit Rating Partners",
    body: "Strong relationships with top credit rating agencies ensuring optimal ratings for our clients.",
  },
  {
    title: "Swift Execution",
    body: "Efficient processing and settlement with dedicated relationship managers for seamless transactions.",
  },
  {
    title: "Risk Management",
    body: "Comprehensive risk assessment frameworks protecting client interests while maximizing returns.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Binary Bonds has been instrumental in structuring our bond portfolio. Their expertise in government securities and credit rating advisory has helped us achieve optimal returns while maintaining regulatory compliance.",
    name: "Rajesh Kumar",
    role: "CFO, National Insurance Company",
    org: "Leading Insurance Provider",
  },
  {
    quote:
      "The team's deep understanding of both primary and secondary bond markets is exceptional. They've consistently delivered competitive pricing and swift execution for our high-value transactions.",
    name: "Priya Sharma",
    role: "Fund Manager, Apex Mutual Fund",
    org: "Top 10 Mutual Fund House",
  },
  {
    quote:
      "Working with Binary Bonds has transformed our bond investment strategy. Their risk management frameworks and market insights have been invaluable in navigating volatile market conditions.",
    name: "Vikram Patel",
    role: "Treasury Head, Metropolitan Bank",
    org: "Private Sector Bank",
  },
  {
    quote:
      "Binary Bonds provides institutional-grade services with personalized attention. Their corporate bond underwriting expertise has opened doors to exclusive investment opportunities with superior yields.",
    name: "Anita Desai",
    role: "Investment Director, HNI Family Office",
    org: "Ultra HNI Client",
  },
  {
    quote:
      "The credit rating advisory services from Binary Bonds helped us secure an AAA rating, significantly reducing our borrowing costs. Their guidance through the entire process was exceptional.",
    name: "Suresh Menon",
    role: "CEO, Regional NBFC",
    org: "Non-Banking Financial Company",
  },
  {
    quote:
      "Binary Bonds' secondary market trading platform provides excellent liquidity and transparent pricing. Their settlement efficiency and regulatory compliance give us complete peace of mind.",
    name: "Kavita Reddy",
    role: "Portfolio Manager, Pension Fund",
    org: "State Pension Fund",
  },
];

export const TEAM = [
  {
    initials: "SV",
    name: "Shray Vasudeva",
    role: "Founder & Director",
    expertise: "Investment Banking & Debt Markets",
    experience: "15+ years",
    bio: "Expert in secondary bond market trading with deep relationships across institutional investors and market makers. Specialized in corporate bond structuring and underwriting.",
    edu: "MBA Finance, IIM International",
  },
  {
    initials: "RRK",
    name: "Rati Ravi Kant",
    role: "Director",
    expertise: "Credit Analysis & Risk Management",
    experience: "20+ years",
    bio: "Extensive experience in credit rating advisory and risk assessment for corporate and government securities.",
    edu: "CFA Charterholder, MBA Finance",
  },
];

// ─── Pexels atmospheric video clips for layered context ────────────────────
// Curated for institutional bond house brand. Each pairs a CDN video stream
// with a locally-bundled poster image so first paint is instant.
export const VIDEOS = {
  hero_skyline: {
    src: "https://videos.pexels.com/video-files/19314111/19314111-hd_1920_1080_30fps.mp4",
    poster: "/brand/pexels-mumbai-skyline-night.jpg",
    alt: "Aerial city skyline at evening — Mumbai bay",
    credit: "Vijit Bagh · Pexels",
  },
  trading_floor: {
    src: "https://videos.pexels.com/video-files/6285687/6285687-hd_1280_720_30fps.mp4",
    poster: "/brand/pexels-trading-screens.jpg",
    alt: "Live trading screens with financial data",
    credit: "Сама Сапогова · Pexels",
  },
  data_streams: {
    src: "https://videos.pexels.com/video-files/36252897/15374240_640_360_30fps.mp4",
    poster: "/brand/pexels-data-monitors.jpg",
    alt: "Abstract financial data streams",
    credit: "Pexels",
  },
  handshake: {
    src: "https://videos.pexels.com/video-files/8170593/8170593-hd_1920_1080_25fps.mp4",
    poster: "/brand/pexels-boardroom-meeting.jpg",
    alt: "Boardroom meeting — institutional client engagement",
    credit: "Kampus Production · Pexels",
  },
  mumbai_traffic: {
    src: "https://videos.pexels.com/video-files/8361011/8361011-hd_1280_720_24fps.mp4",
    poster: "/brand/pexels-mumbai-skyline-evening.jpg",
    alt: "Mumbai night traffic timelapse",
    credit: "Pexels",
  },
  city_aerial: {
    src: "https://videos.pexels.com/video-files/19314111/19314111-hd_1920_1080_30fps.mp4",
    poster: "/brand/pexels-skyscrapers-gold.jpg",
    alt: "City aerial view at sunset",
    credit: "Pexels",
  },
};

// ─── Editorial image library, curated for blank-space-filling moments ───────
export const PEXELS_IMAGES = {
  mumbai_skyline_night: "/brand/pexels-mumbai-skyline-night.jpg",
  mumbai_skyline_evening: "/brand/pexels-mumbai-skyline-evening.jpg",
  trading_screens: "/brand/pexels-trading-screens.jpg",
  boardroom_meeting: "/brand/pexels-boardroom-meeting.jpg",
  skyscrapers_gold: "/brand/pexels-skyscrapers-gold.jpg",
  office_glass_corridor: "/brand/pexels-office-glass-corridor.jpg",
  bond_certificate: "/brand/pexels-bond-certificate.jpg",
  calculator_finance: "/brand/pexels-calculator-finance.jpg",
  indian_architecture: "/brand/pexels-indian-architecture.jpg",
  stock_market_india: "/brand/pexels-stock-market-india.jpg",
  data_monitors: "/brand/pexels-data-monitors.jpg",
  newspaper_finance: "/brand/pexels-newspaper-finance.jpg",
};

export const SERVICE_PHOTOS = {
  corporate: "/brand/service-corporate-bonds.jpg",
  government: "/brand/service-government-securities.jpg",
  high_yield: "/brand/service-high-yield-bonds.jpg",
  portfolio: "/brand/service-portfolio-management.jpg",
  credit: "/brand/service-credit-rating.jpg",
  secondary: "/brand/service-secondary-trading.jpg",
  institutional: "/brand/institutional-clients.jpg",
};
