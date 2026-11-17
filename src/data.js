// Semua teks portofolio ada di sini. Edit file ini saja untuk mengubah isi.
export const PROFILE = {
  name: "Novani Alefniar",
  first: "Novani",
  last: "Alefniar",
  role: "Information Systems Graduate",
  focus: "Web & Laravel Developer",
  city: "Bekasi, West Java",
  email: "novanialefniar2211@gmail.com",
  phone: "+62 813-1509-9780",
  linkedin: "https://linkedin.com/in/novani-alefniar",
  github: "https://github.com/nvnalvnr",
  // Taruh foto di public/portrait.jpg. Kalau belum ada, tampil siluet.
  portrait: "/portrait.jpg",
  statement: [
    "I'm an Information Systems graduate who builds clear, reliable web applications.",
    "Clean data, sensible logic and interfaces people enjoy using.",
  ],
  about:
    "I studied Information Systems at Gunadarma University and learned to treat a website as a system: data, logic and the people who use it. My projects cover authentication, role-based access, CRUD workflows and responsive interfaces in Laravel, native PHP, MySQL and Tailwind CSS. I am early in my career, and I work carefully and learn fast.",
};

export const NAV_LINKS = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Background", "background"],
  ["Contact", "contact"],
];

export const STATS = [
  ["5", "Projects built"],
  ["4", "Certifications"],
];

export const SKILLS = [
  { group: "Languages", items: ["PHP", "JavaScript", "HTML5", "CSS3"] },
  { group: "Frameworks", items: ["Laravel", "Tailwind CSS"] },
  { group: "Databases", items: ["MySQL", "SQL", "CRUD", "Data manipulation"] },
  { group: "Practice", items: ["MVC architecture", "Authentication", "Role-based access", "Responsive design"] },
  { group: "Tools", items: ["VS Code", "Git", "GitHub", "Laragon"] },
  { group: "Office", items: ["Word", "Excel", "PowerPoint"] },
];

export const WORKS = [
  {
    name: "ResepKu",
    type: "Recipe management website",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
    desc: "Manage, discover and save recipes, with separate responsive dashboards for users and administrators, search and saved favourites.",
    link: null,
  },
  {
    name: "Cookies Shop",
    type: "Shop management system",
    stack: ["Native PHP", "MySQL", "Tailwind", "MVC"],
    desc: "Product and order management for a cookie shop, built on a hand-structured MVC architecture.",
    link: null,
  },
  {
    name: "Nov Sport",
    type: "E-commerce website",
    stack: ["PHP", "MySQL"],
    desc: "My academic final project: an online store for presenting products, with product data managed through PHP and MySQL.",
    link: null,
  },
  {
    name: "Explore Wisata",
    type: "Tourism information website",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "A responsive destination guide for desktop and mobile, with search, category filters and consistent navigation.",
    link: null,
  },
  {
    name: "Glow Clinic",
    type: "Clinic landing page",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "A landing page that explains a clinic's services in an organised, responsive layout, published online on Vercel.",
    link: "https://glow-clinic-sandy.vercel.app",
  },
];

export const PATH = [
  {
    when: "2017 — 2022",
    title: "Bachelor of Information Systems",
    place: "Gunadarma University",
    text: "Information technology, business processes, database concepts and application development.",
  },
  {
    when: "Aug — Nov 2020",
    title: "Administrative Intern",
    place: "Directorate General of Defense Strategy, Ministry of Defense, Jakarta",
    text: "Supported daily office operations in a formal government setting, following procedure and keeping records accurate.",
  },
  {
    when: "Retail",
    title: "Store Crew / Cashier",
    place: "Retail experience",
    text: "Helped customers, processed cashier transactions and supported daily store operations.",
  },
];

export const LANGS = [
  ["Indonesian", "Native"],
  ["English", "Basic working"],
];

export const STRENGTHS = [
  ["Analytical thinking", "I break a problem into data, logic and interface before I write the first line."],
  ["Structured problem-solving", "Systematic troubleshooting: reproduce it, isolate it, fix the cause, then check again."],
  ["Attention to detail", "Validation, edge cases and layout get checked before a feature counts as done."],
  ["Adaptability", "I have moved between Laravel, native PHP and plain front-end projects without losing pace."],
  ["Team collaboration", "Coordination and clear communication, practised in a government office and in retail."],
  ["Willingness to learn", "Every project added something new: roles, MVC, filtering, deployment."],
];

export const CERTS = [
  ["Oracle", "Database for Beginner"],
  ["Oracle", "Database Intermediate"],
  ["Cisco", "Networking Intermediate"],
  ["DBMS", "Fundamental Database Management System"],
];